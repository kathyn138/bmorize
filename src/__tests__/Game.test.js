import Game from "../Game";
import { shallow, mount } from "enzyme";

it("can default to rendering level selection", function () {
  let wrapper = shallow(<Game />);
  expect(wrapper.html()).toContain("Select a level");
});

it("can render the loading page", function () {
  let wrapper = mount(<Game />);
  wrapper.find(".LevelSelect-btn-submit").simulate("click");
  expect(wrapper.html()).toContain("Loading...");
});
