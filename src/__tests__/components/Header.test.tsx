import React from "react";
import Enzyme from "../../config/enzyme";
import Header from "../../components/Header";

describe("NavBar component", () => {
  let wrapper;

  it("renders a Header component that contains logo and menu", () => {
    wrapper = Enzyme.shallow(
        <Header />
    );

    expect(wrapper.find("Logo").length).toBe(1);

    expect(wrapper.find("Menu").length).toBe(1);

    expect(wrapper.find("Col").length).toBe(2);
  });
});
