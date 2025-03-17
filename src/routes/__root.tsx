import Header from "@/layouts/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <CookiesProvider>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <Toaster />
    </CookiesProvider>
  ),
});
