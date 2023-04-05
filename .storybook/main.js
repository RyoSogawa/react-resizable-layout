import { mergeConfig } from 'vite';

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return mergeConfig(config);
  },
};
