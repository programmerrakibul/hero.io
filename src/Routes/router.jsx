import { createBrowserRouter } from "react-router";
import RootLayout from "../components/pages/Layouts/RootLayout";
import HomePage from "../components/pages/HomePage/HomePage";
import Apps from "../components/pages/AllApps/AllApps";
import Installation from "../components/pages/Installation/Installation";
import AppDetails from "../components/pages/AppDetails/AppDetails";
import Error from "../components/pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
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
        path: "app-details/:id",
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
