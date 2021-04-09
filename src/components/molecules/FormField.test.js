import React from "react";
import FormField from "components/molecules/FormField";
import { renderWithProviders } from "helpers/renderWithProviders";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
