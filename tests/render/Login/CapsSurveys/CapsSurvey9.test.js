import React from "react";
import CapsSurvey9 from "../../../../screens/Login/CapsSurveys/CapsSurvey9";
import renderer from "react-test-renderer";

test("CapsSurvey9 render test", () => {
  const tree = renderer.create(<CapsSurvey9 />).toJSON();
  expect(tree).toMatchSnapshot();
});
