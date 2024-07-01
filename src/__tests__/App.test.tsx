import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("should render the editor", async () => {
    render(<App />);

    expect(await screen.findByText("Take a note...")).toBeInTheDocument();
  });
});
