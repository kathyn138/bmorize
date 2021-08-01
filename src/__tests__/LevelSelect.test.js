import LevelSelect from "../LevelSelect";
import { mount } from "enzyme";

it("can highlight the selected level", function () {
  let wrapper = mount(<LevelSelect selectedLevel="medium" />);
  expect(wrapper.find(".active")).toHaveLength(1);
  expect(wrapper.find(".LevelBtn-outline-medium.active")).toHaveLength(1);
});
