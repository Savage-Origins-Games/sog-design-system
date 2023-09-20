import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

// Define mock functions for the props
const mockUser = {
  name: "John",
};

const mockProps = {
  user: mockUser,
  onLogin: jest.fn(),
  onLogout: jest.fn(),
  onCreateAccount: jest.fn(),
};

const renderHeader = (props) => render(<Header {...props} />);

describe("Header component", () => {
  it("renders without crashing", () => {
    const { getByText } = renderHeader(mockProps);

    // Check that the component renders without errors
    expect(getByText("Acme")).toBeInTheDocument();
    expect(getByText("Welcome, John!")).toBeInTheDocument();
  });

  it("renders login buttons when user is not authenticated", () => {
    const { getByText } = renderHeader({ ...mockProps, user: undefined });

    // Check that login and sign up buttons are rendered
    expect(getByText("Log in")).toBeInTheDocument();
    expect(getByText("Sign up")).toBeInTheDocument();
  });

  it("calls the correct function when 'Log in' button is clicked", () => {
    const { getByText } = renderHeader({ ...mockProps, user: undefined });

    // Click the 'Log in' button
    fireEvent.click(getByText("Log in"));

    // Check that the 'onLogin' function was called
    expect(mockProps.onLogin).toHaveBeenCalledTimes(1);
  });

  it("calls the correct function when 'Log out' button is clicked", () => {
    const { getByText } = renderHeader(mockProps);

    // Click the 'Log out' button
    fireEvent.click(getByText("Log out"));

    // Check that the 'onLogout' function was called
    expect(mockProps.onLogout).toHaveBeenCalledTimes(1);
  });

  it("calls the correct function when 'Sign up' button is clicked", () => {
    const { getByText } = renderHeader({ ...mockProps, user: undefined });

    // Click the 'Sign up' button
    fireEvent.click(getByText("Sign up"));

    // Check that the 'onCreateAccount' function was called
    expect(mockProps.onCreateAccount).toHaveBeenCalledTimes(1);
  });
});
