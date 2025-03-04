import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module!.rules = config
    .module!.rules!.filter(
      (rule): rule is RuleSetRule => rule !== undefined || rule !== null
    )
    .map(rule => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  config.module!.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  config.module!.rules.push(buildCssLoader(true));

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }))
  // Add your own SVG loader
  // {
  //   test: /\.svg$/,
  //   include: path.resolve(__dirname, './'),
  //   use: [{
  //     loader: 'svg-inline-loader'
  //   }]
  // }
  // ]

  // const assetRule = config.module?.rules?.find(({ test }: RuleSetRule) => test.test(".svg"));

  // const assetLoader = {
  //   loader: assetRule.loader,
  //   options: assetRule.options || assetRule.query
  // };

  // config.module.rules.unshift({
  //   test: /\.svg$/,
  //   use: ["@svgr/webpack", assetLoader]
  // });

  // if (config.module) {
  // config.module.rules = config.module?.rules && config.module?.rules?.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return {...rule, exclude: /\svg$/i}
  //   }

  //   return rule
  // })

  // config.module.rules = (config.module?.rules ?? [])
  // .filter((rule): rule is RuleSetRule =>
  //   // rule !== false &&
  //   rule !== undefined
  //   // rule !== null &&
  //   // rule !== 0 &&
  //   // rule !== ""
  // )
  // .map((rule) => {
  //   if (typeof rule.test === 'function' && /svg/.test(rule.test.toString())) {
  //     return { ...rule, exclude: /\.svg$/ };
  //   }
  //   return rule;
  // });

  // config.module.rules.push({
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   use: ['@svgr/webpack'],
  // })
  // }

  return config;
};
