import { z } from "zod";
export const newProjectSchema = z.object({
  name: z.string(),
});

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  githubRepo: z.string(),
  LlmProvider: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
});
