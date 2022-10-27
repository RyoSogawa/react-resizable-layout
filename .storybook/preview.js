import '../stories/style/SampleBox.css';
import '../stories/style/SampleSeparator.css';
import '../stories/style/IdeClone.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
