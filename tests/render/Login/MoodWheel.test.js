import React from "react";
import MoodWheel from "../../../screens/Login/MoodWheel";
import renderer from "react-test-renderer";

test("MoodWheel render test", () => {
  const tree = renderer.create(<MoodWheel />).toJSON();
  expect(tree).toMatchSnapshot();
});
