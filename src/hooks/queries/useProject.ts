import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "../useApiClient";
import { projectSchema } from "@/schemas";
import { z } from "zod";

export const useProject = (id: string) => {
  const api = useApiClient();

  const project = useQuery({
    queryKey: ["project", id],
    queryFn: (): Promise<z.infer<typeof projectSchema>> =>
      api.get(`/projects/${id}`).then((res) => res.data),
  });

  return {
    project,
  };
};
