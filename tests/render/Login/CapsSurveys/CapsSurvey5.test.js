import React from "react";
import CapsSurvey5 from "../../../../screens/Login/CapsSurveys/CapsSurvey5";
import renderer from "react-test-renderer";

test("CapsSurvey5 render test", () => {
  const tree = renderer.create(<CapsSurvey5 />).toJSON();
  expect(tree).toMatchSnapshot();
});
