import type { Preview } from '@storybook/react-webpack5'
import 'app/styles/index.scss';
import { classNames } from '../../src/shared/lib/classNames';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [
      (Story, { parameters }) => {
        const { theme } = parameters;
        switch (theme) {
          case Theme.LIGHT:
            return <div className={classNames('app', Theme.LIGHT) }>
              <Story />
            </div>;
          case Theme.DARK:
            return <div className={classNames('app', Theme.DARK) }>
              <Story />
            </div>;
          default:
            return <div className={classNames('app', Theme.LIGHT) }>
              <Story />
            </div>;
        }
      },
    (Story) => {
          return <BrowserRouter>
            <Story />
          </BrowserRouter>;
    },
  ],
};

export default preview;
