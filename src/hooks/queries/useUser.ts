import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../useApiClient";

export const useUser = () => {
  const api = useApiClient();
  const currentUser = useQuery({
    queryKey: ["user"],
    queryFn: (): Promise<any> => api.get("/users/me").then((res) => res.data),
  });

  const repos = useQuery({
    queryKey: ["repos"],
    queryFn: (): Promise<any> =>
      api.get("/users/repos").then((res) => res.data),
  });

  return {
    repos,
    currentUser,
  };
};
