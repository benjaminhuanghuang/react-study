# React + Vite + Vitest

## setup
```sh
npm i -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

Modify vite.config.js
```js
 test: {
    globals: true, // Enable global access to test utilities
    environment: 'jsdom', // Simulates a browser environment
  },
```

Add test command
```json
"test": "vitest"
```