import React from "react";
import Guide3 from "../../../screens/Login/Guide3";
import renderer from "react-test-renderer";

test("Guide3 render test", () => {
  const tree = renderer.create(<Guide3 />).toJSON();
  expect(tree).toMatchSnapshot();
});
