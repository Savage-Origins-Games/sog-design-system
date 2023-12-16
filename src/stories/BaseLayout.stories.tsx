import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BaseLayout } from "../Patterns/BaseLayout";
import { MainLayout } from "../Patterns/MainLayout";

const meta: Meta<typeof BaseLayout> = {
  component: BaseLayout,
  title: "SOG Design System/Patterns/BaseLayout",
};
export default meta;

type Story = StoryObj<typeof BaseLayout>;
export const Default: Story = {
  args: {
    children: <MainLayout />,
  },
};
