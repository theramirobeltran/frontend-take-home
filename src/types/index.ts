export type NpmResponseT = {
  results: PackageT[];
  time: string;
  total: number;
};

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

export type SettingsName = "failNetworkRequests" | "viewPaginated";

export type SettingsT = {
  failNetworkRequests: boolean;
  viewPaginated: boolean;
};
