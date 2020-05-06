import React from "react";
import HistoryRoute from "../../../screens/tabScreens/HistoryRoute";
import renderer from "react-test-renderer";

test("HistoryRoute render test", () => {
  const tree = renderer.create(<HistoryRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
