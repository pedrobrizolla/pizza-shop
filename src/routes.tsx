import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { useAuthGuard } from "./protected/use-auth-guard";

// @ts-ignore
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  useAuthGuard();

  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
