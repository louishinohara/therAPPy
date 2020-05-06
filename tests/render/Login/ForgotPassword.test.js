import React from "react";
import Login from "../../../screens/Login/ForgotPassword";
import renderer from "react-test-renderer";

test("ForgotPassword render test", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
