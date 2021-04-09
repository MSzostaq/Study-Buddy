import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithProviders";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: { value: "Michael" },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: { value: "55%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "4.5" },
    });
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Michael");
  });
});
