import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-webpack5",
  webpackFinal: async (config) => {

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: "[path][name]__[local]--[hash:base64:4]",
              namedExport: false,
            }
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    };
    const imageLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    };

    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    };

    config.module.rules.push(cssLoader, imageLoader, svgLoader);
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '..', '..', "src"),
    ];


    // Чтобы работали SVG убираем дефолтный svg-лоадер
    config.module!.rules = config.module!.rules!.map((rule) => {
      if (rule && typeof rule === "object" && "type" in rule && rule.type === "asset/resource") {
        return {
          ...rule,
          test: new RegExp(
            rule.test!.toString().replace("svg|", "").slice(1, -1)
          ),
        };
      } else {
        return rule;
      }
    });

    return config;
  },
};
export default config;
