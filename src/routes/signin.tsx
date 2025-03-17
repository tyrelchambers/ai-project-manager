import { buttonVariants } from "@/components/ui/button";
import { BASE_URL } from "@/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Signin</h1>

      <a
        href={`${BASE_URL}/auth/initialize`}
        className={buttonVariants({ variant: "default" })}
      >
        Sign in with Github
      </a>
    </div>
  );
}
