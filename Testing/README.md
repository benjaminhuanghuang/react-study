# React  Testing

Effective, valuable, easy-to-maintain/maintainable, robust, trustworthy


## What to test
- Testing Components
  - Test rendering
  - Test user interactions
  - Test the behavior not the implementation/details
  - Test teh behavior not the styles

- Mocking APls
- Testing Forms
- Testing State Management
- Testing Authentication
- Testing Routing

## Key points
- Test stateless/stateful components 
- Test Coverage
- Test redux
- Test redux-thunk


## Testing Framework
- Jest - Experimental support for ECMAScript Modules
- Mocha
- Jasmine
- Vitest - Supports ESM, TypeScript, and JSX
```sh
npm i -D vitest

Install Vitest Snippets VS code extension

# package.json
"test": "vitest",
"test:ui": "vitest --ui"   # show testing result in web browser
```