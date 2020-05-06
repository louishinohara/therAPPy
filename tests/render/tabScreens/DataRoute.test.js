import React from "react";
import DataRoute from "../../../screens/tabScreens/DataRoute";
import renderer from "react-test-renderer";

test("DataRoute render test", () => {
  const tree = renderer.create(<DataRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
