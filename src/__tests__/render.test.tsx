import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText(/Package search tool/)).toBeInTheDocument();
  });
});
