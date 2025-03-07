export type BuildMode = 'development' | 'production';

export interface BuildPath {
  //
  entry: string;
  // До папки со сборкой
  build: string;
  // До файла html
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}
