import '../stories/style/SampleBox.css';
import '../stories/style/SampleSeparator.css';
import '../stories/style/IdeClone.css';

import { Parameters } from '@storybook/react';

export const parameters: Parameters = {
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
