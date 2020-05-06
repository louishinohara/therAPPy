import React from "react";
import Guide4 from "../../../screens/Login/Guide4";
import renderer from "react-test-renderer";

test("Guide1 render test", () => {
  const tree = renderer.create(<Guide4 />).toJSON();
  expect(tree).toMatchSnapshot();
});
