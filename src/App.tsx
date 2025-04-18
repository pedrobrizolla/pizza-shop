import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./global.css";
import { router } from "./routes";

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <title>Dashboard | pizza.shop</title>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
