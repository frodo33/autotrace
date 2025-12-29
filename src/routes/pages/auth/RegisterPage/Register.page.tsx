import { createRoute } from "node_modules/@tanstack/react-router/dist/cjs/route.d.cts"

export const registerRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: "register",
  component: RegisterPage
})

export const RegisterPage = () => (
  <>
    login page
  </>
)
