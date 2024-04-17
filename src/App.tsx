import { Text, VStack } from "@chakra-ui/react";
import { SimpleSearch } from "./components";

function App() {
  return (
    <VStack maxW={800} spacing={4} my={4}>
      <Text fontSize="x-large">Package search tool</Text>
      <SimpleSearch />
    </VStack>
  );
}

export default App;
