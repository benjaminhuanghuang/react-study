# React Testing: Unit Testing React and E2E Testing

https://www.youtube.com/watch?v=iIMaFgeNzc8

https://monsterlessons-academy.com/courses/react-testing-unit-testing-react-and-e2e-testing

## Setup

```sh
npm create vite@latest
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

Create vitest.config.js

```js
defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup"],
  },
});
```

Stop the eslint complain when don't import vitest in js test file

```sh
npm i -D eslint-plugin-vitest
```
