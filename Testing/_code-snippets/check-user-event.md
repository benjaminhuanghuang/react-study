```js
test("should emit clicked page", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  render(
    <Pagination
      total={50}
      limit={10}
      currentPage={1}
      selectPage={handleClick}
    />
  );
  const pageContainer = screen.getAllByTestId("page-container");
  await user.click(pageContainer[0]);
  expect(handleClick).toHaveBeenCalledOnce();
});
```
