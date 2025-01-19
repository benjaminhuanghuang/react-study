import { render, screen } from "@testing-library/react";
// Component to test
import App from "./App.tsx";

test("should have hello world", () => {
  render(<App />);
  const message = screen.queryByText(/Hello world/i);
  expect(message).toBeVisible();
});
