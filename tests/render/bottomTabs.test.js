import React from "react";
import BottomTabs from "../../screens/bottomTabs";
import renderer from "react-test-renderer";

test("BottomTabs render test", () => {
  const tree = renderer.create(<BottomTabs />).toJSON();
  expect(tree).toMatchSnapshot();
});
