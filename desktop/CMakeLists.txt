cmake_minimum_required(VERSION 3.21)

file(STRINGS "${CMAKE_CURRENT_SOURCE_DIR}/VERSION" STLWARE_VERSION LIMIT_COUNT 1)
string(STRIP "${STLWARE_VERSION}" STLWARE_VERSION)
project(STLware VERSION ${STLWARE_VERSION} LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
if(MSVC)
  add_compile_options(/utf-8 /W3 /permissive-)
  add_compile_definitions(_CRT_SECURE_NO_WARNINGS NOMINMAX)
endif()

# Qt 6.4 or newer. Windows builds use Qt 6.8 LTS (see .github/workflows/desktop.yml).
find_package(Qt6 6.4 REQUIRED COMPONENTS Core Gui Widgets OpenGL OpenGLWidgets Network Concurrent)

# --- third party ---------------------------------------------------------------
add_library(miniz STATIC third_party/miniz/miniz.c)
target_include_directories(miniz PUBLIC third_party/miniz)
set_target_properties(miniz PROPERTIES POSITION_INDEPENDENT_CODE ON)

# --- core: file formats and geometry, no UI ------------------------------------------
add_library(stlware_core STATIC
  src/core/Model.cpp
  src/core/Stl.cpp
  src/core/ThreeMF.cpp
  src/core/Xml.cpp
  src/core/Zip.cpp
)
target_include_directories(stlware_core PUBLIC src/core)
target_link_libraries(stlware_core PUBLIC miniz Qt6::Core)

# --- the app ---------------------------------------------------------------------
set(APP_SOURCES
  src/app/main.cpp
  src/app/MainWindow.cpp
  src/app/Viewport.cpp
  src/app/Theme.cpp
  src/app/Updater.cpp
  src/app/Version.cpp
  resources/resources.qrc
)
if(WIN32)
  configure_file(resources/stlware.rc.in ${CMAKE_CURRENT_BINARY_DIR}/stlware.rc @ONLY)
  list(APPEND APP_SOURCES ${CMAKE_CURRENT_BINARY_DIR}/stlware.rc)
endif()
qt_add_executable(STLware WIN32 MACOSX_BUNDLE ${APP_SOURCES})
target_include_directories(STLware PRIVATE src/app)
target_compile_definitions(STLware PRIVATE STLWARE_VERSION="${STLWARE_VERSION}")
target_link_libraries(STLware PRIVATE stlware_core
  Qt6::Widgets Qt6::OpenGL Qt6::OpenGLWidgets Qt6::Network Qt6::Concurrent)

# --- updater: replaces the changed files after the app has closed (no Qt) ------------------
add_executable(stlware-updater WIN32 updater/updater.cpp)
if(WIN32)
  target_link_libraries(stlware-updater PRIVATE user32 shell32)
endif()
if(MSVC)
  # It runs from the download folder, next to no DLLs, so it carries its own C++ runtime.
  set_property(TARGET stlware-updater PROPERTY MSVC_RUNTIME_LIBRARY "MultiThreaded")
endif()

# --- tests -----------------------------------------------------------------------
enable_testing()
add_executable(stlware_tests tests/core_tests.cpp)
target_link_libraries(stlware_tests PRIVATE stlware_core)
target_compile_definitions(stlware_tests PRIVATE STLWARE_REPO="${CMAKE_CURRENT_SOURCE_DIR}/..")
add_test(NAME core COMMAND stlware_tests)
