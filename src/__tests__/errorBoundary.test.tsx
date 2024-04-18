// write a test to check if the ErrorBoundary component renders the error message when an error is thrown

import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "../components";

const FailingComponent = () => {
  throw new Error("This component always fails.");
};

describe("ErrorBoundary", () => {
  it("renders the error message when an error is thrown", () => {
    const errorMessage = "Something went wrong, please try again.";

    render(
      <ErrorBoundary>
        <FailingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
