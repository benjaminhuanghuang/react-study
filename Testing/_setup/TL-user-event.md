# @testing-library/user-event

The @testing-library/user-event library provides a more human-like way to simulate user actions compared to the lower-level fireEvent utility that comes with @testing-library/react.

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("allows the user to type into an input", async () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Type something...");
  await userEvent.type(input, "Hello, world!");
  expect(input).toHaveValue("Hello, world!");
});
```
