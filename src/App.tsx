import { useState } from "react";
import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { SettingsDrawer, SimpleSearch } from "./components";
import { MdOutlineSettingsSuggest } from "react-icons/md";

function App() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <VStack maxW={800} spacing={4} my={2} p={2}>
      <Box pos="fixed" right={2}>
        <IconButton
          aria-label={"toggle-settings"}
          icon={<MdOutlineSettingsSuggest />}
          onClick={() => setSettingsOpen(!isSettingsOpen)}
        />
      </Box>
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <Text fontSize="x-large">Package search tool</Text>
      <SimpleSearch />
    </VStack>
  );
}

export default App;
