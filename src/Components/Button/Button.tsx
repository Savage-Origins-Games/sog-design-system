import React from "react";
import "./button.css";

interface Props {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = (props: Props) => {
  const mode = props.primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${props.size}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor: props.backgroundColor }}
      {...props}
    >
      {props.label}
    </button>
  );
};
