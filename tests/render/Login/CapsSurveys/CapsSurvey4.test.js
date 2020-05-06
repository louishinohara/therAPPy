import React from "react";
import CapsSurvey4 from "../../../../screens/Login/CapsSurveys/CapsSurvey4";
import renderer from "react-test-renderer";

test("CapsSurvey4 render test", () => {
  const tree = renderer.create(<CapsSurvey4 />).toJSON();
  expect(tree).toMatchSnapshot();
});
