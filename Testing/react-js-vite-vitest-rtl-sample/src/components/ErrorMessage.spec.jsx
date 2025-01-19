import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// Component to test
import ErrorMessage from "./ErrorMessage";
import "@testing-library/jest-dom/vitest";
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
