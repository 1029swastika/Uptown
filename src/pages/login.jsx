import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../redux/userSlice";

function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://uptown-mjbn.onrender.com/api/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log(res.data);

        toast.success("login Successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        dispatch(setUserDetail(res.data.userObj));
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("hello error");

        if (err.response.data.msg) {
          console.log("yo error khoi");
          toast.error(err.response.data.msg);
        } else {
          const errorArray = err.response?.data;
          let temp = {};
          errorArray.forEach((error) => {
            temp[error.params] = error.msg;
          });
          setError(temp);
        }
      });
    setError({});
  }

  return (
    <div>
      <ToastContainer />

      {/* here this taoscontainer is useless I would suggest to render the ToastContainer at the root of your app. Outside of react-router if possible coz yesko main vaneko tw header ho so teta trigger hunxa toastcontainer */}
      {/* <Toaster /> */}
      <section className="   dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  font-semibold text-textTwo leading-tight tracking-tight  md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-textThree dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border outline-none border-gray-300  sm:text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400 "
                    placeholder="name@company.com"
                  />
                  <small className="text-red-800">{error.email}</small>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-textThree dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  "
                  />
                  <small className="text-red-800">{error.password}</small>
                </div>

                <button
                  type="submit"
                  className="w-full text-myPink hover:border-2 hover:border-myPink bg-primary-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600  dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p
                  className="text-sm  hover:text-myPink cursor-pointer
                 font-light text-gray-500 dark:text-gray-400"
                >
                  Don’t have an account yet? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
