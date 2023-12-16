import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../Components/Header/Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "SOG Design System/Components/Header",
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: { text: "Header Title", description: "Description" },
};
