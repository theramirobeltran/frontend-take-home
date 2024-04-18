import { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { DNA } from "react-loader-spinner";
import { PaginatedResults, SearchForm } from ".";
import { usePaginatedSearch } from "../hooks";

export const PaginatedSearch = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage] = useState(10); // Hardcoded for now
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, isRefetching, refetch } =
    usePaginatedSearch(searchTerm, pageNumber, resultsPerPage);

  const { results, total } = data ?? { results: [], total: 0 };

  const handleSearch = searchTerm.length ? refetch : () => {};

  const handlePageChange = (newPage: number) => {
    const minPage = 1;
    const maxPage = Math.ceil(total ?? 1 / resultsPerPage);
    newPage >= minPage && newPage < maxPage && setPageNumber(newPage);
    handleSearch();
  };

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <VStack spacing={8}>
      <SearchForm
        isLoading={isLoading}
        onChange={handleSearchChange}
        onSubmit={handleSearch}
        searchTerm={searchTerm}
      />
      {isError && <Text>Whoah, something went wrong. Please try again.</Text>}
      {isLoading && (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      )}
      {results.length > 0 && (
        <PaginatedResults
          isLoading={isLoading || isRefetching}
          onPageChange={handlePageChange}
          page={pageNumber}
          results={results}
          resultsPerPage={resultsPerPage}
          total={total}
        />
      )}
    </VStack>
  );
};
