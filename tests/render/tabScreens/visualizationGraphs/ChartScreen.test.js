import React from "react";
import ChartScreen from "../../../../screens/tabScreens/visualizationGraphs/3rdchart";
import renderer from "react-test-renderer";

test("ChartScreen render test", () => {
  const tree = renderer.create(<ChartScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
