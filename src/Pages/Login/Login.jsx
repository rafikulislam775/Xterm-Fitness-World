import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";

const Login = () => {
  const { userLogin, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e?.target.email.value;
    const password = e?.target.password.value;
    userLogin(email, password)
      // .then((res) => console.log(res?.user))
      // .catch((error) => console.error(error?.message));
      // console.log(email, password);
      .then(() => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
        swal("Good job!", "now you are login successfully!", "success");
      })
      .catch(() =>
        swal("Oops", "Something went wrong ! please try again", "error")
      );
  };
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: "url(https://i.ibb.co/VD8D9ct/Register.jpg)",

          backgroundPosition: "center",
        }}
      >
        <div className="hero-content   flex-col lg:flex-row">
          <div className="text-center text-white md:ml-48  lg:text-left">
            <h1 className="text-5xl font-bold"> Login now!</h1>
            <p className="py-6 text-lg">
              Our trainers will guide you through heart-pumping workouts to
              enhance endurance and stamina
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  className="input input-bordered"
                  name="password"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>

              <div className="form-control mt-6">
                {user ? (
                  <button className="btn hover:btn-info ">Logout</button>
                ) : (
                  <button className="btn hover:btn-info ">login</button>
                )}

                <p className="text-sm my-4   font-light text-gray-500 dark:text-gray-400">
                  you have no account yet ?{" "}
                  <NavLink
                    to="/register"
                    className="font-medium text-blue-600 underline dark:text-primary-500"
                  >
                    Register
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

export default Login;
