import React from "react";
import LoginBase from "../../../screens/Login/Login";
import renderer from "react-test-renderer";

test("LoginBase render test", () => {
  const tree = renderer.create(<LoginBase />).toJSON();
  expect(tree).toMatchSnapshot();
});
