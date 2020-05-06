import React from "react";
import CapsSurvey6 from "../../../../screens/Login/CapsSurveys/CapsSurvey6";
import renderer from "react-test-renderer";

test("CapsSurvey6 render test", () => {
  const tree = renderer.create(<CapsSurvey6 />).toJSON();
  expect(tree).toMatchSnapshot();
});
