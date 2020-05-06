import React from "react";
import CapsSurvey12 from "../../../../screens/Login/CapsSurveys/CapsSurvey12";
import renderer from "react-test-renderer";

test("CapsSurvey12 render test", () => {
  const tree = renderer.create(<CapsSurvey12 />).toJSON();
  expect(tree).toMatchSnapshot();
});
