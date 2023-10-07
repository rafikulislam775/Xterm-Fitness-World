import { Outlet } from "react-router-dom";
import Navbar from "../../sections/Navbar/Navbar";
import Footer from "../../sections/footer/Footer";
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
