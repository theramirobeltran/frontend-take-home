import { FC, PropsWithChildren, createContext, useState } from "react";
import { SettingsName, SettingsT } from "../types";

export type AppContextType = {
  settings: SettingsT;
  updateSetting: (setting: SettingsName, value: boolean) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsT>({
    failNetworkRequests: false,
  });

  const updateSetting = (setting: SettingsName, value: boolean) => {
    setSettings({ ...settings, [setting]: value });
  };

  return (
    <AppContext.Provider
      value={{
        settings,
        updateSetting,
      }}
    >
      <>{children}</>
    </AppContext.Provider>
  );
};
