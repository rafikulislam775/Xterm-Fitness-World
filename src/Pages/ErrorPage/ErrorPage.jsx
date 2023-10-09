import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex h-screen justify-center items-center text-center"
      id="error-page"
    >
      <div>
        <h2 className=" text-9xl text-white">{error.status} !</h2>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to="/">
          <button className=" mt-5 btn btn-outline btn-info btn-sm ">
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}
