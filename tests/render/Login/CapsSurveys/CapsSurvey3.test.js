import React from "react";
import CapsSurvey3 from "../../../../screens/Login/CapsSurveys/CapsSurvey3";
import renderer from "react-test-renderer";

test("CapsSurvey3 render test", () => {
  const tree = renderer.create(<CapsSurvey3 />).toJSON();
  expect(tree).toMatchSnapshot();
});
