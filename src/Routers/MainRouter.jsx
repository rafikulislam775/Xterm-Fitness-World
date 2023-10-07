import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/MainLayout/Layout";
import Home from "../Pages/Home/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default MainRouter;
