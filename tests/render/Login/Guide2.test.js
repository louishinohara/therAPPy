import React from "react";
import Guide2 from "../../../screens/Login/Guide2";
import renderer from "react-test-renderer";

test("Guide2 render test", () => {
  const tree = renderer.create(<Guide2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
