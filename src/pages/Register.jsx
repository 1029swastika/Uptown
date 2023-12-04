import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage() {
  const [error, setError] = useState({});

  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  function handleImage(e) {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData();

    fd.append("username", e.target.username.value);
    fd.append("email", e.target.email.value);
    fd.append("password", e.target.password.value);
    fd.append("repeat_password", e.target.repeat_password.value);
    fd.append("image", profileImage || "");

    console.log(...fd);
    axios
      .post("https://uptown-mjbn.onrender.com/api/signup", fd)
      .then((res) => {
        toast.success("Signup Success");

        navigate("/login");
      })
      .catch((Err) => {
        console.log(Err);
        setError({});
        console.log("hello error");
        //Err.response.data.errors[0].msg)
        if (Err.response?.data.errors) {
          const errorArray = Err.response.data.errors;
          let temp = {};
          errorArray.forEach((error) => {
            temp[error.params] = error.msg;

            if (error.params === "repeat_password") {
              temp.repeat_password = "*Both password should be same";
            }
            if (error.params === "image") {
              temp.image = "*Please add a Image";
            }
          });

          setError({ ...temp });
        }

        if (Err.response.data.msg) {
          setError({ email: Err.response.data.msg });
        }
      });
    setError({});

    console.log(error);
  }

  return (
    <>
      {/* <ToastContainer /> yeta halerw kam xaina header ma halnu parxa main root ma */}
      {/* <Toaster /> */}
      <div>
        <section className="  ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up for a new Account
                </h1>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="space-y-4 md:space-y-1"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <input
                      // onChange={(e) => handleChange(e)}
                      // value={userData.username}
                      type="username"
                      name="username"
                      id="username"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 outline-none"
                      placeholder="your username here"
                    />
                    <small className="text-red-800">{error.username}</small>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      // onChange={(e) => handleChange(e)}
                      // value={userData.email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      required=""
                    />
                    <small className="text-red-800">{error.email}</small>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      // onChange={(e) => handleChange(e)}
                      // value={userData.password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700"
                      required=""
                    />
                    <small className="text-red-800">{error.password}</small>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Re-type password
                    </label>
                    <input
                      // onChange={(e) => handleChange(e)}
                      // value={userData.repeat_password}
                      type="password"
                      name="repeat_password"
                      id="repeat_password"
                      placeholder="••••••••"
                      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                      required=""
                    />
                    <small className="text-red-800">
                      {error.repeat_password}
                    </small>
                  </div>

                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Add Profile Picture
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => {
                          handleImage(e);
                          //setProductData({ ...productData, images: e.target.files });
                        }}
                        name="image"
                        type="file"
                        className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <small className="text-red-800">{error.image}</small>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full  text-myPink bg-primary-600 hover:border-2 hover:border-myPink focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RegisterPage;
