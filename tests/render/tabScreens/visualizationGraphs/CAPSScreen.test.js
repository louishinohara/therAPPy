import React from "react";
import CAPSScreen from "../../../../screens/tabScreens/visualizationGraphs/4thchart";
import renderer from "react-test-renderer";

test("CAPSScreen render test", () => {
  const tree = renderer.create(<CAPSScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
