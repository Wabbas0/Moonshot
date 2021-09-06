import React from "react";
import Enzyme from "../../config/enzyme";
import Logo from "../../components/Logo";

describe("NavBar component", () => {
  let wrapper;

  it("renders a Logo component with text and lottie animation", () => {
    wrapper = Enzyme.shallow(
        <Logo />
    );

    expect(wrapper.find("Title").length).toBe(1);

    expect(wrapper.find("Lottie").length).toBe(1);

    expect(wrapper.find("Col").length).toBe(2);
  });
});
