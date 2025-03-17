import LLMPicker from "@/components/LLMPicker";
import { useProject } from "@/hooks/queries/useProject";
import { useUser } from "@/hooks/queries/useUser";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/project/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const projectId = Route.useParams();
  const [llm, setLlm] = useState("");
  if (!projectId) {
    throw new Error("No project id");
  }

  const { repos } = useUser();
  const { project } = useProject(projectId.id);
  const p = project.data;
  if (!project.data || !p) {
    return <div>Loading...</div>;
  }

  console.log(repos);
  return (
    <div>
      <h1>{p.name}</h1>
      {!p.githubRepo && (
        <div>
          <h2>Connect to a Github repo</h2>
          <p>
            Connect to Github repo so the Agent can sync and manage your issues.
          </p>
        </div>
      )}
    </div>
  );
}
