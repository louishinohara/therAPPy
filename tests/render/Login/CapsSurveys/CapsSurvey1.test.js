import React from "react";
import CapsSurvey1 from "../../../../screens/Login/CapsSurveys/CapsSurvey1";
import renderer from "react-test-renderer";

test("CapsSurvey1 render test", () => {
  const tree = renderer.create(<CapsSurvey1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
