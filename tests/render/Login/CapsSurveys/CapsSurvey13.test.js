import React from "react";
import CapsSurvey13 from "../../../../screens/Login/CapsSurveys/CapsSurvey13";
import renderer from "react-test-renderer";

test("CapsSurvey13 render test", () => {
  const tree = renderer.create(<CapsSurvey13 />).toJSON();
  expect(tree).toMatchSnapshot();
});
