import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);

  const assetModulesLoader = {
    test: /\.(png|jpg|gif|woff2|woff)$/i,
    type: 'asset/resource',
  };

  return [assetModulesLoader, svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader];
}
