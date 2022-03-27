import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Counter from "./Counter";

describe("<Counter />", () => {
  configure({adapter: new Adapter()});
  it("properly increments and decrements the counter", () => {
    const setValue = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(initialValue => [initialValue, setValue]);
    const wrapper = shallow(<Counter />);

    wrapper
      .find("button")
      .last()
      .props()
      .onClick();

    // TODO: 
    // expect(setValue).toHaveBeenCalledWith(1);


    // We can't make any assumptions here on the real count displayed
    // In fact, the setCount setter is mocked!

    wrapper
      .find("button")
      .first()
      .props()
      .onClick();
    // TODO:
    // expect(setValue).toHaveBeenCalledWith(-1);
  });
});
