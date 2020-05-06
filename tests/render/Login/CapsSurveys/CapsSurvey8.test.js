import React from "react";
import CapsSurvey8 from "../../../../screens/Login/CapsSurveys/CapsSurvey8";
import renderer from "react-test-renderer";

test("CapsSurvey8 render test", () => {
  const tree = renderer.create(<CapsSurvey8 />).toJSON();
  expect(tree).toMatchSnapshot();
});
