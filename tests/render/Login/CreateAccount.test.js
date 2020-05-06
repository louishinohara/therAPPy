import React from "react";
import CreateAccount from "../../../screens/Login/CreateAccount";
import renderer from "react-test-renderer";

test("CreateAccount render test", () => {
  const tree = renderer.create(<CreateAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});
