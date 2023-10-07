import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default MainRouter;
