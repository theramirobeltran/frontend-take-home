import { FC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Switch,
} from "@chakra-ui/react";
import { ColorModeToggle } from ".";
import { SettingsName } from "../types";
import { useAppContext } from "../hooks";

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsDrawer: FC<SettingsDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { updateSetting } = useAppContext();

  const changeHandler =
    (key: SettingsName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateSetting(key, e.currentTarget.checked);
    };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Settings</DrawerHeader>

        <DrawerBody alignContent="flex-start">
          <ColorModeToggle />
          <Switch onChange={changeHandler("failNetworkRequests")} my={4}>
            Fail Network Requests
          </Switch>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
