import { useMutation } from "@tanstack/react-query";
import { useApiClient } from "../useApiClient";
import { newProjectSchema } from "@/schemas";
import { z } from "zod";

export const useMutations = () => {
  const api = useApiClient();

  const createProject = useMutation({
    mutationKey: ["createProject"],
    mutationFn: (data: z.infer<typeof newProjectSchema>): Promise<string> => {
      return api.post("/projects/create", data).then((res) => res.data);
    },
  });

  return {
    createProject,
  };
};
