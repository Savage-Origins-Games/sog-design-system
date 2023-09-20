import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button"; // Make sure to import the Button component from the correct path

// Test cases for the Button component
describe("Button Component", () => {
  it("renders with label", () => {
    const { getByText } = render(<Button label="Click Me" />);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with primary style", () => {
    const { container } = render(<Button label="Primary Button" primary />);
    const buttonElement = container.querySelector(".storybook-button--primary");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with secondary style", () => {
    const { container } = render(<Button label="Secondary Button" />);
    const buttonElement = container.querySelector(
      ".storybook-button--secondary"
    );
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const { container } = render(<Button label="Small Button" size="small" />);
    const smallButtonElement = container.querySelector(
      ".storybook-button--small"
    );
    expect(smallButtonElement).toBeInTheDocument();

    const { container: container2 } = render(
      <Button label="Large Button" size="large" />
    );
    const largeButtonElement = container2.querySelector(
      ".storybook-button--large"
    );
    expect(largeButtonElement).toBeInTheDocument();
  });

  it("executes onClick callback when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={onClickMock} />
    );
    const buttonElement = getByText("Click Me");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
