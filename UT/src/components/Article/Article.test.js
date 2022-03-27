import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Article from "./Article";

configure({adapter: new Adapter()});

it("should render title", () => {
  const props = {
    title: "Title",
    teaser: "Teaser",
    publishDate: "2020-09-12",
  };
  const wrapper = shallow(<Article {...props} />);

  // expect(wrapper.find(Title).text()).toEqual(props.title)s;
});
