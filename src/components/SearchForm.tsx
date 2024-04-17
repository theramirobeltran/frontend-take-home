import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { Button, Input, Stack } from "@chakra-ui/react";

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isLoading = false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction={["column", "row"]}
        w={"100%"}
        maxW={600}
        justify="center"
        alignContent={"center"}
      >
        <Input
          placeholder="Search packages..."
          onChange={handleChange}
          value={searchTerm}
        />
        <Button
          rightIcon={<FaSearchengin />}
          px={6}
          type="submit"
          isLoading={isLoading}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};