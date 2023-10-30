import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./index"; 

describe("Table Component", () => {
  
it("renders a table with the provided children", () => {
  const tableContent = (
    <tbody>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </tbody>
  );


  render(<Table>{tableContent}</Table>);

  const tableElement = screen.getByRole("table");

  expect(tableElement).toBeInTheDocument();
  expect(screen.getByText("Row 1, Column 1")).toBeInTheDocument();
  expect(screen.getByText("Row 1, Column 2")).toBeInTheDocument();
  expect(screen.getByText("Row 2, Column 1")).toBeInTheDocument();
  expect(screen.getByText("Row 2, Column 2")).toBeInTheDocument();
});

  it("applies the expected CSS class to the table element", () => {
  
    render(<Table />);

    const tableElement = screen.getByRole("table");

    expect(tableElement).toHaveClass("table");
  });


});
