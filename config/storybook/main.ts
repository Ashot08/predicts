import type { StorybookConfig } from '@storybook/react-webpack5';
import custom from '../../webpack.config';

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
    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...custom({mode: 'development', port: 3000}).module.rules] },
    };
  },
};
export default config;
