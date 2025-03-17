import LLMPicker from "@/components/LLMPicker";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newProjectSchema } from "@/schemas";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useMutations } from "@/hooks/mutations/useMutations";
import { toast } from "sonner";

export const Route = createFileRoute("/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const { createProject } = useMutations();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      name: "",
    },
  });
  const submitHandler = (data: z.infer<typeof newProjectSchema>) => {
    createProject.mutate(data, {
      onSuccess: (data) => {
        toast.success("Project created successfully");
        navigate({ to: `/project/${data}` });
      },
    });
  };
  return (
    <div>
      <h1>New project</h1>
      <p>Create your new project</p>

      <Form {...form}>
        <form
          className="flex flex-col gap-3"
          onSubmit={form.handleSubmit(submitHandler)}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name</FormLabel>
                <Input {...field} placeholder="Project name" />
              </FormItem>
            )}
          />
          <Button>Create project</Button>
        </form>
      </Form>
    </div>
  );
}
