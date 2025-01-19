# Setup vite + vitest + testing-library/react

```sh
npm create vite@latest

npm i -D vitest
npm i -D jsdom @testing-library/react @testing-library/jest-dom
```

When you install @testing-library/jest-dom, it provides custom Jest matchers for asserting on DOM nodes in your tests.
However, it doesn't include a DOM implementation itself.
If you're running your tests in a Node.js environment, you'll need jsdom to simulate the browser's DOM.

create vitest.config.ts

```js
defineConfig({
  test: {
    globals: true, // Enable global access to test utilities
    environment: "jsdom", // Simulates a browser environment
    setupFiles: ["./src/setupTests.ts"],
  },
});
```

Modify tsconfig.app.json, no need to import vitest in test files

```json
 "types": ["vitest/globals"]
```

Create a setup.ts file and import import "@testing-library/jest-dom";

```ts
import "@testing-library/jest-dom";
```

Then you can use function toBeVisible() or toHaveTextContent()

Otherwise, you have to import "@testing-library/jest-dom"; in each test file

```js
expect(message).toBeVisible();
```
