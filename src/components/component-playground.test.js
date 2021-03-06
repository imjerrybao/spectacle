import React from "react";
import { render } from "enzyme";
import { renderToJson } from "enzyme-to-json";
import ComponentPlayground from "./component-playground";

describe("<ComponentPlayground />", () => {
  test("Should render the dark theme correctly", () => {
    const wrapper = render(
      <ComponentPlayground
        theme="dark"
      />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render the light theme correctly", () => {
    const wrapper = render(
      <ComponentPlayground
        theme="light"
      />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render with a custom background color", () => {
    const wrapper = render(
      <ComponentPlayground
        theme="light"
        previewBackgroundColor="#ff0"
      />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render with a custom code block", () => {
    const code = `
      const Button = ({ title }) => (<button type="button">{ title }</button>);
      render(<Button title="My Button" />, mountNode);
    `;
    const wrapper = render(
      <ComponentPlayground
        theme="light"
        code={code}
        previewBackgroundColor="#ff0"
      />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
