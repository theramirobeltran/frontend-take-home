import { FC } from "react";
import { FaSearchengin } from "react-icons/fa";
import { Button, Input, Stack } from "@chakra-ui/react";

interface SearchFormProps {
  isLoading?: boolean;
  onChange: (searchTerm: string) => void;
  onSubmit: () => void;
  searchTerm: string;
}

export const SearchForm: FC<SearchFormProps> = ({
  isLoading,
  onChange,
  onSubmit,
  searchTerm,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
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
