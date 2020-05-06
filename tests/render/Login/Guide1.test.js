import React from "react";
import Guide1 from "../../../screens/Login/Guide1";
import renderer from "react-test-renderer";

test("Guide1 render test", () => {
  const tree = renderer.create(<Guide1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
