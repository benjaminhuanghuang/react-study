import { describe, test, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Greeting component", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  test("renders Greeting component with a name", () => {
    render(<Greeting name={"abc"}/>);
    expect(screen.getByText("Hello, abc!")).toBeInTheDocument();
  });

});
