import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Details from "../sections/Services/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Pricing from "../sections/Pricing/Pricing";
import Contact from "../sections/Contact/Contact";
import About from "../sections/About/About";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Details></Details>
          </PrivateRoute>
        ),

        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default MainRouter;
