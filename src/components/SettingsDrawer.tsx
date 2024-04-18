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
  const { settings, updateSetting } = useAppContext();

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
          <Switch
            isChecked={settings.failNetworkRequests}
            onChange={changeHandler("failNetworkRequests")}
            my={4}
          >
            Fail Network Requests
          </Switch>
          <Switch
            isChecked={settings.viewPaginated}
            onChange={changeHandler("viewPaginated")}
            mt={4}
          >
            View Paginated Example
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
