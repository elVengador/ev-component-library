import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "destructive",
        "foreground",
        "background",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    children: "Click here",
    onPress: () => console.log("clicked!!"),
  },
};

export const Flat: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: "Click here",
    onPress: () => console.log("clicked!!"),
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    variant: "flat",
    children: "Click here",
    onPress: () => console.log("clicked!!"),
    isDisabled: true
  },
};