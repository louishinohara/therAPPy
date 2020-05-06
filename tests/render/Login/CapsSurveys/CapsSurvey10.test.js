import React from "react";
import CapsSurvey10 from "../../../../screens/Login/CapsSurveys/CapsSurvey10";
import renderer from "react-test-renderer";

test("CapsSurvey10 render test", () => {
  const tree = renderer.create(<CapsSurvey10 />).toJSON();
  expect(tree).toMatchSnapshot();
});
