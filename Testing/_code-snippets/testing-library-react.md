## Test a div

```js
const divElement = screen.getByText(/Name is Jack/i);

const divElement = screen.getByRole("contentinfo");

expect(divElement).toHaveTextContent("Name is Jack");
expect(divElement).toHaveAttribute("role", "contentinfo");
```

## Test a component list

```js
const anchorElements = screen.getAllByRole("navigation");

expect(anchorElements[0]).toHaveTextContent(items[0].name);
expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
```

```js
test("loads and displays greeting", async () => {
  render(<FetchGreeting />);

  userEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("heading", { name: "hello there" });

  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
```

## Snapshot

```
  test('should render correctly', () => {
    const container = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  });
```

## Find component

use regex

```
  screen.getByRole('button', {name: /pay/i}).toBeEnabled();
```

Exist

```
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
```

## Input

```
  const userNameField = screen.getByPlaceholderText('Enter user name')
  const passwordField = screen.getByPlaceholderText('Enter password')

  await user.type(userNameField, 'Philchard')
  await user.type(passwordField, 'theCat')

  expect(userNameField).toHaveValue('Philchard')
  expect(passwordField).toHaveValue('theCat')
```

## Wait

```
  await screen.findByRole('heading', {name: 'hello there'})
```

## Enable / Disalbe

```
  screen.getByRole('button', {name: /pay/i}).toBeEnabled();
```

## Fire evnet

```
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

fireEvent.click(screen.getByText('Load Greeting'))

await waitFor(() =>
  // getByRole throws an error if it cannot find an element
  screen.getByRole('heading'),
)
```

## Check css

```

```

## references

- 5 Tips to Perfect React Testing Library Queries

```
 screen.debug();
```

```
  expect(getByText('Button')).toMatchInlineSnapshot(`
    <button>
      Button
    </button>
  `);
```

```
expect(getByLabelText('Field')).toMatchInlineSnapshot(`<input />`);
```

```
expect(within(row1).getByText('Cell')).toBeTruthy();
```
