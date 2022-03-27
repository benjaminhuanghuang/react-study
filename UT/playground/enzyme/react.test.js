import React from "react";
// Enzyme
import { configure, shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import App from "./App";
import Counter from "./Counter";


describe("My React componnet tesint", () => {
  let wrapper;
  beforeEach(() => {
    // don't render sub-component
    wrapper = shallow(<Counter />);
    console.log(wrapper.debug())
  });
  test("render the title of componnet", () => {
    // find h1, get text of it
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render button increment", () => {
    // find button, get text of it
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state", () => {
    // find button, get text of it
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  // render doesn't have simulate - only shallow and mount do.
  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrrment button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
