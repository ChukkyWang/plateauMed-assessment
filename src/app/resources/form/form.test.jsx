import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "./form";
import style from "./form.module.css";

describe("Form Component", () => {
  it("should render a form element with the correct class name", () => {
    render(<Form />);

    const form = screen.getByRole("form");

    expect(form).toHaveClass(style.form);
  });

  it("should render the children passed to it", () => {
    render(
      <Form>
        <input />
        <button />
      </Form>
    );

    const childElements = screen.getAllByRole("form");

    expect(childElements).toHaveLength(1);
  });

  it("should pass additional props to the form element", () => {
    render(<Form id="my-form" />);

    const form = screen.getByRole("form");

    expect(form).toHaveAttribute("id", "my-form");
  });

  
});
