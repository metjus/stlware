; STLware installer (Inno Setup 6). Built by .github/workflows/desktop.yml:
;   iscc /DAppVersion=0.1.0 /DPayload=<folder with STLware.exe and its DLLs> /O<out> stlware.iss
; Installs for the current user only (no administrator rights), so the app can update itself.

#ifndef AppVersion
  #define AppVersion "0.0.0"
#endif
#ifndef Payload
  #define Payload "..\..\payload"
#endif

[Setup]
AppId={{6E0F5C3A-2B7D-4C2E-9D1A-5B7E3C9A41F2}
AppName=STLware
AppVersion={#AppVersion}
AppVerName=STLware {#AppVersion}
AppPublisher=STLware
AppPublisherURL=https://stlware.com
AppSupportURL=https://stlware.com
DefaultDirName={localappdata}\Programs\STLware
DisableDirPage=yes
DisableProgramGroupPage=yes
DisableReadyPage=yes
PrivilegesRequired=lowest
OutputBaseFilename=STLware-Setup
SetupIconFile=..\resources\stlware.ico
UninstallDisplayIcon={app}\STLware.exe
UninstallDisplayName=STLware
WizardStyle=modern
Compression=lzma2/max
SolidCompression=yes
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
CloseApplications=yes
ChangesAssociations=yes

[Tasks]
Name: "desktopicon"; Description: "Create a desktop shortcut"; GroupDescription: "Shortcuts:"

[Files]
Source: "{#Payload}\*"; DestDir: "{app}"; Flags: recursesubdirs ignoreversion createallsubdirs

[Icons]
Name: "{autoprograms}\STLware"; Filename: "{app}\STLware.exe"
Name: "{autodesktop}\STLware"; Filename: "{app}\STLware.exe"; Tasks: desktopicon

[Registry]
; "Open with STLware" for STL and 3MF files, without taking over the default app.
Root: HKCU; Subkey: "Software\Classes\STLware.Model"; ValueType: string; ValueName: ""; ValueData: "3D model"; Flags: uninsdeletekey
Root: HKCU; Subkey: "Software\Classes\STLware.Model\DefaultIcon"; ValueType: string; ValueName: ""; ValueData: """{app}\STLware.exe"",0"
Root: HKCU; Subkey: "Software\Classes\STLware.Model\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\STLware.exe"" ""%1"""
Root: HKCU; Subkey: "Software\Classes\.stl\OpenWithProgids"; ValueType: string; ValueName: "STLware.Model"; ValueData: ""; Flags: uninsdeletevalue
Root: HKCU; Subkey: "Software\Classes\.3mf\OpenWithProgids"; ValueType: string; ValueName: "STLware.Model"; ValueData: ""; Flags: uninsdeletevalue
Root: HKCU; Subkey: "Software\Classes\Applications\STLware.exe\SupportedTypes"; ValueType: string; ValueName: ".stl"; ValueData: ""; Flags: uninsdeletekey
Root: HKCU; Subkey: "Software\Classes\Applications\STLware.exe\SupportedTypes"; ValueType: string; ValueName: ".3mf"; ValueData: ""
Root: HKCU; Subkey: "Software\Classes\Applications\STLware.exe\shell\open\command"; ValueType: string; ValueName: ""; ValueData: """{app}\STLware.exe"" ""%1"""

[Run]
Filename: "{app}\STLware.exe"; Description: "Start STLware"; Flags: nowait postinstall skipifsilent

[UninstallDelete]
Type: filesandordirs; Name: "{app}"
