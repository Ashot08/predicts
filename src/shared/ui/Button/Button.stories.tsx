import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { fn } from 'storybook/test';

import { Button, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ui/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn(),     children: 'Button Text', },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY_BUTTON,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: ButtonTheme.PRIMARY_BUTTON,
  },
  parameters: {theme: Theme.DARK}
};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  parameters: {theme: Theme.DARK}
};

export const Outlined: Story = {
  args: {
    theme: ButtonTheme.OUTLINED,
  },
};

export const OutlinedDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINED,
  },
  parameters: {theme: Theme.DARK}
};
