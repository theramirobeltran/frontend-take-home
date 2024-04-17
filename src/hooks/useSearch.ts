import { useQuery } from "@tanstack/react-query";
import { PackageT } from "../types";
import { BASE_API_URL } from "../constants";

export const usePackageSearch = (queryString: string) => {
  const url = `${BASE_API_URL}/suggestions?q=${queryString}`;

  return useQuery({
    enabled: false,
    queryKey: ["packageSearch", queryString],
    queryFn: async () => {
      const response = await fetch(url);
      return (await response.json()) as PackageT[];
    },
  });
};
