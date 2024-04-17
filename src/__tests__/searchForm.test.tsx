import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchForm } from "../components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("SearchForm", () => {
  it("renders the search form", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchForm onChange={vi.fn} onSubmit={vi.fn} searchTerm="" />
      </QueryClientProvider>
    );
    expect(
      screen.getByPlaceholderText(/Search packages.../)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Search/ })).toBeInTheDocument();
  });
});
