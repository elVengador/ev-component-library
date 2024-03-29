import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "./BaseHtml";

const meta = {
  title: "BaseHtml/H1",
  component: H1,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Title: Story = {
  args: {
    children: "H1 title",
    id: "h1-title",
  },
};
