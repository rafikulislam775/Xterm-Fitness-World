import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Routers/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((res) => console.log("Sign-out successful.", res.user))
      .catch((err) => console.error("Sign-out failed.", err));
  };

  const menus = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/trainers">Trainers</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      {/* <li>
        {" "}
        <NavLink to="/login">Login</NavLink>
      </li> */}
      <li>
        {" "}
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-800  border-b  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>

          <img
            className="w-5 md:w-10"
            src="https://i.ibb.co/HGTdvg2/logo1.png"
            alt=""
          />
          <p className="ml-2"> Xterm Fitness World</p>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn ">
            {user ? (
              <p onClick={handleSignOut}>logout</p>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
