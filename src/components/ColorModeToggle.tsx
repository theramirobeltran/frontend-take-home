import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label="toggle color mode"
      colorScheme="teal"
      leftIcon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      paddingLeft={0}
      variant="ghost"
    >
      Toggle theme
    </Button>
  );
};
