import React from "react";
import Guide5 from "../../../screens/Login/Guide5";
import renderer from "react-test-renderer";

test("Guide5 render test", () => {
  const tree = renderer.create(<Guide5 />).toJSON();
  expect(tree).toMatchSnapshot();
});
