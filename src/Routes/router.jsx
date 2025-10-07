import { createBrowserRouter } from "react-router";
import RootLayout from "../components/pages/Layouts/RootLayout";
import HomePage from "../components/pages/HomePage/HomePage";
import Apps from "../components/pages/AllApps/AllApps";
import Installation from "../components/pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: 'app-details/:id',
      }
    ],
  },
]);

export default router;
