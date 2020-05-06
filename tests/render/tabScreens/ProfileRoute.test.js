import React from "react";
import ProfileRoute from "../../../screens/tabScreens/ProfileRoute";
import renderer from "react-test-renderer";

test("ProfileRoute render test", () => {
  const tree = renderer.create(<ProfileRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
