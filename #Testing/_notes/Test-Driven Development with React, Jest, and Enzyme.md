# Test-Driven Development with React, Jest, and Enzyme
From  [Test-Driven Development with React, Jest, and Enzyme](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/)

## Target
- Use TDD to develop a basic calculator React Application consisting of four UI components
  - Calculator(main)
  - Display
  - Keypad
  - Key
  
- Test a React Application with Enzyme and Jest

- Write and use CSS variables for reuse and responsive design

- Create a reusable React component that renders and functions differently based on the provided props

- Use React propTypes to type check component props

- Approach an application from a responsive design perspective

- Use the Flexible Box Module to create a flexible layout


## TDD Process:
- Add a test
- Run all tests and see if the new test fails (red)
- Write the code to pass the test (green)
- Run all tests
- Refactor
- Repeat *

## Setup
- Create project
```
  create-react-app .
```
copy source code from (http://github.com/calebpollman/react-calculator.git)

- Setup testing tools
Jest was installed by create-react-app

Instll enzyme
```
$ npm i -D enzyme
```
Enzyme requires react-test-renderer for React apps version 15.5 or greater:
```
$ npm i -D react-test-renderer enzyme-adapter-react-16
```

Add a new file in the "src" directory titled setupTests.js:
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
"react-scripts test" runs the setupTests.js file before each test, so it will execute and properly configure Enzyme.

 
## CSS Variables
Next, we'll write our first variable and a basic CSS reset. Since we want the variables globally available to the application, we'll define them from the :root scope. The syntax for defining variables is to use [custom property notation](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), each will begin with -- followed by the variable name. Let's write a variable for our application font and continue updating the variables as needed.


## Enzyme render functions
- shallow() is the simplest form of rendering a component with Enzyme. It only renders the component but **not the content of children components of this component**. It makes it possible to test the component in **isolation**. Be used for component tests in isolation (unit tests, lightweight integration).
```
beforeEach(() => wrapper = shallow(<App />));
```
- mount() renders all child components as well. It renders the whole component hierarchy. It is used for **real integration** tests.

- render() is similar to mount(), it renders all child components. But from a performance point of view, it is less expensive than mount(), because it **doesn’t run the lifecycle methods** of the component. So if you need access to child components but are not interested in lifecycle methods, you can use render() instead of mount().

## Jest functions
- Setup
```
  beforeEach(() => wrapper = shallow(<App />));
```
- Find element
```
  expect(wrapper.find('div').length).toEqual(1);
```
- Find sub component
```
  expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    
  expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toEqual(true);
  
  expect(wrapper.containsAllMatchingElements([
      <Display displayValue={wrapper.instance().state.displayValue} />,
      <Keypad
        callOperator={wrapper.instance().callOperator}
        handleKeyPress={wrapper.instance().handleKeyPress}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
  ])).toEqual(true);
```

## Snapshot Testing
Snapshots are not part of TDD as they are written after a component has been written.
It used to alert you of any unexpected changes to a rendered component

As we complete the UI of each component, we'll add a snapshot tests as the **first** test in each spec file. 
```
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
```
The new snapshot test passes immediately, and it will continue to pass until there has been a UI change in that component. 
This also created a "__snapshots__" directory for the component along with a file named Component.spec.js.snap.

Update the snapshot by entering u in the test runner or from the command line:
```
$ npm test --updateSnapshot
```