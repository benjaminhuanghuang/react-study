import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// Component to test
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders default error state", () => {
    render(<ErrorMessage />);

    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Something went wrong"
    );
  });

  test("renders custom error state", () => {
    render(<ErrorMessage message="Email is already taken" />);

    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Email is already taken"
    );
  });
});
