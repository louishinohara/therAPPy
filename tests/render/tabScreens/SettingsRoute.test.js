import React from "react";
import SettingsRoute from "../../../screens/tabScreens/SettingsRoute";
import renderer from "react-test-renderer";

test("SettingsRoute render test", () => {
  const tree = renderer.create(<SettingsRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
