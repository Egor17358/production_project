import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPath } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl;
  }
  if (mode === 'production') {
    return '/api';
  } else {
    return 'http://localhost:8000';
  }
}

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env?.mode || 'development';
  const PORT = env?.port || 3000;
  // const apiUrl = env?.apiUrl || 'http://localhost:8000';
  const apiUrl = getApiUrl(mode, env?.apiUrl);

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, 'src'),
    },
  };

  return config;
};
