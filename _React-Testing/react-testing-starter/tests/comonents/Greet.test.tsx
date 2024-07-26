import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);
    // screen.debug();  // show the rendered HTML in web browser
    const heading = screen.getByRole("heading");   
    expect(heading).toBeInTheDocument();  // jest-dom assertion
    expect(heading).toHaveTextContent(/mosh/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});