import type { Meta, StoryObj } from "@storybook/react";

import { Ul } from "./Ul";

const meta = {
  title: "BaseHtml/Ul",
  component: Ul,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Ul>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
  args: {
    children: (
      <>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </>
    ),
  },
};
