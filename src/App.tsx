import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./global.css";
import { router } from "./routes";

export function App() {
  return (
    <>
      <title>Dashboard | pizza.shop</title>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
