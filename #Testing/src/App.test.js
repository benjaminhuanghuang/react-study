import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "./App";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

describe("Navigation in App", () => {
  it("should render the home page", () => {
    const { container, getByTestId } = renderWithRouter(<App />);
    const navbar = getByTestId("navbar");
    const link = getByTestId("home-link");

    expect(container.innerHTML).toMatch("Home");
    expect(navbar).toContainElement(link);
  });

  it("should navigate to the reports page", () => {
    const { container, getByTestId } = renderWithRouter(<App />);

    fireEvent.click(getByTestId("reports-link"));

    expect(container.innerHTML).toMatch("Reports");
  });

  it("should navigate to the products the params", () => {
    const { container, getByTestId } = renderWithRouter(<App />);

    fireEvent.click(getByTestId("products-link"));

    expect(container.innerHTML).toMatch("Products");
  });
});
