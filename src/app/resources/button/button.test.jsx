import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("renders a button with provided children and optional class name", () => {
  
    const buttonText = "Click Me";
    const customClassName = "custom-class";

    render(<Button className={customClassName}>{buttonText}</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass(customClassName);

    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it("renders a button with the default style", () => {

    const buttonText = "Click Me";

    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("button");

    expect(buttonElement).toHaveTextContent(buttonText);
  });
});
