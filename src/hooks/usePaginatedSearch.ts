import { useQuery } from "@tanstack/react-query";
import { useAppContext } from ".";
import { NpmResponseT } from "../types";
import { BASE_API_URL } from "../constants";

export const usePaginatedSearch = (
  queryString: string,
  page = 1,
  resultsPerPage = 10
) => {
  const { settings } = useAppContext();
  const offset = (page - 1) * resultsPerPage;
  const url = `${BASE_API_URL}?q=${queryString}&from=${offset}&size=${resultsPerPage}`;

  // If the `failNetworkRequests` setting is enabled, the query will always fail
  // to simulate a network error.
  const queryFn = settings.failNetworkRequests
    ? () => Promise.reject()
    : async () => {
        const response = await fetch(url);
        return (await response.json()) as NpmResponseT;
      };

  return useQuery({
    enabled: false,
    queryKey: ["paginatedSearch", queryString],
    queryFn,
    throwOnError: true,
  });
};
