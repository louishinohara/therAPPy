import React from "react";
import Resources from "../../../screens/Login/Resources";
import renderer from "react-test-renderer";

test("Resources render test", () => {
  const tree = renderer.create(<Resources />).toJSON();
  expect(tree).toMatchSnapshot();
});
