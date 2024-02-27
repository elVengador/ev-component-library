import type { Meta, StoryObj } from "@storybook/react";

import { H5 } from "../lib/Text";

const meta = {
  title: "Atoms/H5",
  component: H5,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H5Title: Story = {
  args: {
    children: "H5 title",
  },
};
