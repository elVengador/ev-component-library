import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: 'color' },
  //   color:{control:}
  // },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RedirectLink: Story = {
  args: {
    color: "primary",
    children: "Redirect",
  },
};

export const OpenInNewTabLink: Story = {
  args: {
    color: "primary",
    target: "_blank",
    children: "Open in new tab",
  },
};
