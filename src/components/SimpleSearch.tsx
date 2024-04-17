import { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { DNA } from "react-loader-spinner";
import { ResultsList, SearchForm } from ".";
import { usePackageSearch } from "../hooks";

export const SimpleSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, refetch } = usePackageSearch(searchTerm);

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <VStack spacing={4}>
      <SearchForm
        isLoading={isLoading}
        onChange={handleSearchChange}
        onSubmit={refetch}
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
      <ResultsList results={data ?? []} />
    </VStack>
  );
};
