import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider, type QueryClientConfig } from "@tanstack/react-query";
import { createMemoryHistory, createRootRoute, createRoute, createRouter, Outlet, RouterProvider, type AnyRoute } from "@tanstack/react-router";
import { render, type RenderResult } from "@testing-library/react";

export type RenderWithProvidersProps = {
	ui: ReactNode
	initialPath?: string
	additionalPaths?: string[]
  queryClientConfig?: QueryClientConfig
}

export const renderWithProviders = ({
  ui,
  initialPath = "/",
  additionalPaths = [],
  queryClientConfig,
}: RenderWithProvidersProps): RenderResult => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: 0,
      },
      mutations: {
        retry: false,
      }
    },
    ...queryClientConfig,
  })

  const history = createMemoryHistory({ initialEntries: [initialPath] })
  const rootRoute = createRootRoute({ component: Outlet })

  const allPaths = Array.from(new Set([initialPath, ...additionalPaths]));

  const routes: AnyRoute[] = allPaths.map((path) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path,
      component: () => <>{ui}</>
    })
  );

  const routeTree = rootRoute.addChildren(routes);
  const router = createRouter({ routeTree, history });

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}