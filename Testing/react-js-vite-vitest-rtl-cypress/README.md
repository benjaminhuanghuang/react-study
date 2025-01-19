# React Unit Testing Crash Course: Beginner to Advanced Guide

https://www.youtube.com/watch?v=iIMaFgeNzc8

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
