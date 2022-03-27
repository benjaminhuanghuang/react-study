import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

it("should equal to 0", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});

it("should be enabled", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("button-down")).toBeDisabled();
});
