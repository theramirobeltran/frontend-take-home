import { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { DNA } from "react-loader-spinner";
import { ResultsList, SearchForm } from ".";
import { useSimpleSearch } from "../hooks";

export const SimpleSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError, refetch } = useSimpleSearch(searchTerm);

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const submit = searchTerm.length ? refetch : () => {};

  return (
    <VStack spacing={8}>
      <SearchForm
        isLoading={isLoading}
        onChange={handleSearchChange}
        onSubmit={submit}
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
