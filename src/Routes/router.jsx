import { createBrowserRouter } from "react-router";
import RootLayout from "../components/pages/Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

export default router;
