import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
// Component to test
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders default error state", () => {
    render(<ErrorMessage />);
    screen.debug();
  });
});
