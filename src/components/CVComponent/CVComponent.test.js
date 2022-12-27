import React from "react";
import { shallow } from "enzyme";
import CVComponent from "./CVComponent";

describe("CVComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CVComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
