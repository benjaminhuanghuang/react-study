## mockResolvedValueOnce

```js
describe("UserProfile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays the user data", async () => {
    (global.fetch as Mock).mockResolvedValueOnce({
      json: async () => ({ id: 4, name: "John", email: "john@gmail.com" }),
    });

    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });
  });
});
```

## spyOn

```js
it("should resolve with mock data on the first call", async () => {
  // Mock the fetchData function to return a resolved promise with mock data once
  vi.spyOn(global, "fetch").mockResolvedValueOnce({
    json: () => Promise.resolve({ id: 1, name: "John Doe" }),
  });

  const data = await fetchData();

  // Verify the resolved value
  expect(data).toEqual({ id: 1, name: "John Doe" });
});
```
