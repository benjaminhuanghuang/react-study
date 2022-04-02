## Test a div
```
  const divElement = screen.getByText(/Name is Jack/i);
  
  const divElement = screen.getByRole("contentinfo");

  expect(divElement).toHaveTextContent("Name is Jack");
  expect(divElement).toHaveAttribute("role", "contentinfo");

``` 

## Test a component list
```
  const anchorElements = screen.getAllByRole("navigation");

  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
```