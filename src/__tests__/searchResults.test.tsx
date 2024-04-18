import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";
import { ResultsList } from "../components";
import { PackageT } from "../types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockResults: PackageT[] = Array.from({ length: 7 }, () => ({
  package: {
    name: faker.lorem.word(),
    version: faker.system.semver(),
    description: faker.lorem.sentence(),
    links: {
      npm: faker.internet.url(),
      repository: faker.internet.url(),
      homepage: faker.internet.url(),
    },
  },
}));

describe("SearchResults", () => {
  it("renders search results", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResultsList results={mockResults} />
      </QueryClientProvider>
    );
    expect(screen.getAllByRole("link")).toHaveLength(mockResults.length);
    mockResults.forEach((pkg) => {
      expect(screen.getByText(pkg.package.name)).toBeInTheDocument();
      expect(
        screen.getByText(`Latest version: ${pkg.package.version}`)
      ).toBeInTheDocument();
      expect(screen.getByText(pkg.package.description)).toBeInTheDocument();
    });
  });
});
