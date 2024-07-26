# React Testing library + Vitest setup

Vitest is a modern testing framework Supports ESM, TypeScript, and JSX

Install Vitest
```sh
npm i -D vitest
```

Install Vitest Snippets VS code extension

Add test script in package.json
```
"test": "vitest",
"test:ui": "vitest --ui"   # show testing result in web browser
```
create a setup.ts file, and tell vitest.config.ts

Setup React Testing Library

```sh
# render components and interact with components like end user
npm i -D @testing-library/react

# dom assertion like: expect(heading).toHaveTextContent(/hello/i);
npm i -D @testing-library/jest-dom

# User interactions, events
npm i -D @testing-library/user-event

# emulates the DOM environment
npm i -D jsdom@24.0.0


```
create vitest.config.ts to tell vitest use jsdom testing environment

## Simplifying Test Setup
Add globals: true in vitest.config.ts

Add "types":["vitest/globals"] into tsconfig.json




## Query
search "react testing library queries"

