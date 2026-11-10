declare module 'cdt2d' {
  export default function cdt2d(
    points: [number, number][],
    edges?: [number, number][],
    options?: { delaunay?: boolean; interior?: boolean; exterior?: boolean; infinity?: boolean },
  ): number[][];
}

declare const __BUILD_TIME__: string;
declare const __APP_VERSION__: string;
