import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component", () => {
  test("increments the count on button click", async () => {
    render(<Counter />);
    let counterValue = screen.getByTestId('counter-value');   
    expect(counterValue.textContent).toEqual("0"); 

    const button = screen.getByRole("button", {name: /increment/i}).click();
    await userEvent.click(button);
    
    counterValue = screen.getByTestId('counter-value');   
    expect(counterValue.textContent).toEqual("1"); 
  });
});
