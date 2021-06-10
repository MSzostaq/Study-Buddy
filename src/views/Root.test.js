import React from "react";
import { fireEvent, render, screen, waitFor } from "test-utils";
import Root from "./Root";

describe("Root component", () => {
  it("Renders the root component as unauthenticated user", () => {
    render(<Root />);
    screen.getByLabelText("login");
  });

  it("Displays an error message when there are wrong credentials", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByLabelText("password");

    fireEvent.change(login, { target: { value: "InvalidLogin" } });
    fireEvent.change(password, { target: { value: "InvalidPassword" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it("Displays authenticated application", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByLabelText("password");

    fireEvent.change(login, { target: { value: "teacher@studybuddy.com" } });
    fireEvent.change(password, { target: { value: "Test123" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Logout/));
  });
});
