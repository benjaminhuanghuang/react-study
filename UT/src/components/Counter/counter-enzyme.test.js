import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";

import Counter from "./Counter";

describe("<Counter />", () => {
  configure({adapter: new Adapter()});

  it("properly increments and decrements the counter", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state("count")).toBe(0);

    wrapper.instance().increment();
    expect(wrapper.state("count")).toBe(1);

    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);
  });
});
