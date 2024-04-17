import { useState } from "react";
import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { SettingsDrawer, SimpleSearch } from "./components";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SettingsName } from "./types";

function App() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => setSettingsOpen(!isSettingsOpen);

  const handleSettingsChange = (setting: SettingsName, value: boolean) => {
    console.log(`Setting ${setting} to ${value}`);
  };

  return (
    <VStack maxW={800} spacing={4} my={4}>
      <Box pos="fixed" right={2}>
        <IconButton
          aria-label={"toggle-settings"}
          icon={<MdOutlineSettingsSuggest />}
          onClick={toggleSettings}
        />
      </Box>
      <SettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
        onChange={handleSettingsChange}
      />
      <Text fontSize="x-large">Package search tool</Text>
      <SimpleSearch />
    </VStack>
  );
}

export default App;
