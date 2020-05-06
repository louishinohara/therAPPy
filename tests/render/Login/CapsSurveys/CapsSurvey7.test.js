import React from "react";
import CapsSurvey7 from "../../../../screens/Login/CapsSurveys/CapsSurvey7";
import renderer from "react-test-renderer";

test("CapsSurvey7 render test", () => {
  const tree = renderer.create(<CapsSurvey7 />).toJSON();
  expect(tree).toMatchSnapshot();
});
