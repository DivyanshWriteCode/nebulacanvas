import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        variant: "inputLightMode",
        placeholder: "Insert text here",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        variant: "inputLightMode",
        placeholder: "Password",
    },
};

export const Number: Story = {
    args: {
        type: "number",
        // variant: "inputDarkMode",
        placeholder: "Enter Number"
    },
};

export const Date: Story = {
    args: {
        type: "date",
        variant: "inputDarkMode",
        placeholder: "Date",
    },
};