import { Box, Text } from "@chakra-ui/react";
import { SearchForm } from "./components";

function App() {
  return (
    <Box>
      <Text fontSize="x-large">Package search tool</Text>
      <SearchForm />
    </Box>
  );
}

export default App;
