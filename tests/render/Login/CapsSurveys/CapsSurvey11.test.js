import React from "react";
import CapsSurvey11 from "../../../../screens/Login/CapsSurveys/CapsSurvey11";
import renderer from "react-test-renderer";

test("CapsSurvey11 render test", () => {
  const tree = renderer.create(<CapsSurvey11 />).toJSON();
  expect(tree).toMatchSnapshot();
});
