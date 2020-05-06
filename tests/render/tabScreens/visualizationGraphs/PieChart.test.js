import React from "react";
import PieChart from "../../../../screens/tabScreens/visualizationGraphs/1stchart";
import renderer from "react-test-renderer";

test("PieChart render test", () => {
  const tree = renderer.create(<PieChart />).toJSON();
  expect(tree).toMatchSnapshot();
});
