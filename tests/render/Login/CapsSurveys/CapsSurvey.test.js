import React from "react";
import CapsSurvey from "../../../../screens/Login/CapsSurveys/CapsSurvey";
import renderer from "react-test-renderer";

test("CapsSurvey render test", () => {
  const tree = renderer.create(<CapsSurvey />).toJSON();
  expect(tree).toMatchSnapshot();
});
