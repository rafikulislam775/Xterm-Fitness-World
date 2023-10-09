import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //call custom hook
  const { createUsers } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e?.target.email.value;
    const password = e?.target.password.value;
    createUsers(email, password)
      // .then((res) => console.log(res?.user))
      // .catch((error) => console.error(error?.message));
      // console.log(email, password);
      .then(() => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
        swal("Welcome!", "You are SignUp successfully!", "success");
      })
      .catch(() =>
        swal("Oops", "Something went wrong ! please try again", "error")
      );
  };

  return (
    <div>
      <div
        className="hero min-h-screen text-white "
        style={{
          backgroundImage: "url(https://i.ibb.co/F76NNqR/loginf.jpg)",
        }}
      >
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <div className="text-center md:ml-48  lg:text-left">
            <h1 className="text-5xl font-bold uppercase">
              {" "}
              welcome to the xterm fitness
            </h1>
            <p className="py-6 uppercase">
              solutions for moving better & feeling a healthier
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input "
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input "
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input "
                  name="password"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control  mt-6">
                <button className="btn   hover:btn-info  "> Register</button>
                <p className="text-sm my-4 font-light text-gray-500 dark:text-gray-400">
                  You have an account ?{" "}
                  <NavLink
                    to="/Login"
                    className="font-medium text-blue-600 underline dark:text-primary-500"
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
