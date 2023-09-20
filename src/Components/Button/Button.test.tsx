import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with label", () => {
  // Render the Button component with a label
  render(<Button label="Click me" />);

  // Use screen queries to check if the button with the label is present
  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("renders button without label", () => {
  // Render the Button component without a label
  render(<Button label="" />);

  // Use screen queries to check if a button without a label is present
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
