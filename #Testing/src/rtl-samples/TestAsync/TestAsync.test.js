import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import TestAsync from "./TestAsync";

afterEach(cleanup);

it("increments counter after 0.5s", async () => {
  const { getByTestId } = render(<TestAsync />);

  fireEvent.click(getByTestId("button-up"));

  const counter = await screen.findByText("1");

  expect(counter).toHaveTextContent("1");
});
