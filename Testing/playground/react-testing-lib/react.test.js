
import React from 'react'
import {render} from '@testing-library/react'

import App from './App'

describe("My React componnet tesint", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
    console.log(wrapper.debug())
  });

  test("render the title of componnet", () => {
    const { getByText } = wrapper;
    getByText("This is counter app");
  });
});