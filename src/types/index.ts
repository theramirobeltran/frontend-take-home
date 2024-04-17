export type PackageT = {
  package: {
    name: string;
    version: string;
    description: string;
    links: {
      npm: string;
    };
  };
};

export type SettingsName = "failNetworkRequests";
