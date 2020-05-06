import React from "react";
import CapsSurvey2 from "../../../../screens/Login/CapsSurveys/CapsSurvey2";
import renderer from "react-test-renderer";

test("CapsSurvey2 render test", () => {
  const tree = renderer.create(<CapsSurvey2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
