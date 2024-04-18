import { useQuery } from "@tanstack/react-query";
import { useAppContext } from ".";
import { PackageT } from "../types";
import { BASE_API_URL } from "../constants";

export const usePackageSearch = (queryString: string) => {
  const { settings } = useAppContext();
  const url = `${BASE_API_URL}/suggestions?q=${queryString}`;

  // If the `failNetworkRequests` setting is enabled, the query will always fail
  // to simulate a network error.
  const queryFn = settings.failNetworkRequests
    ? () => Promise.reject()
    : async () => {
        const response = await fetch(url);
        return (await response.json()) as PackageT[];
      };

  return useQuery({
    enabled: false,
    queryKey: ["packageSearch", queryString],
    queryFn,
    throwOnError: true,
  });
};
