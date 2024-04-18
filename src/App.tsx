import { useState } from "react";
import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { PaginatedSearch, SettingsDrawer, SimpleSearch } from "./components";
import { useAppContext } from "./hooks";

function App() {
  const { settings } = useAppContext();
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <VStack maxW={800} spacing={4} my={2} p={2}>
      <Text fontSize="x-large">Package search tool</Text>

      {settings.viewPaginated ? <PaginatedSearch /> : <SimpleSearch />}

      {/* Trigger and views for settings 👇 */}
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
    </VStack>
  );
}

export default App;
