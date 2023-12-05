import { NavLink, useNavigate } from "react-router-dom";
import bgImg from "../assets/bgImg.jpg";
import { Parallax } from "react-parallax";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";

function CreateProperty() {
  const [propertyData, setPropertyData] = useState();
  const [roomImg, setRoomImg] = useState(null);
  const [roomDescription, setDescription] = useState(null);
  const [formError, setFormError] = useState({});

  const navigate = useNavigate();
  function handleImage(e) {
    setRoomImg(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  function handleCreateProperty(e) {
    e.preventDefault();
    console.log("hello");

    const fd = new FormData();

    fd.append("lot_area", e.target.lot_area.value);
    fd.append("bedRooms", e.target.bedRooms.value);
    fd.append("bathRooms", e.target.bathRooms.value);
    fd.append("garage", e.target.garage.value);
    fd.append("stories", e.target.stories.value);
    fd.append("roofing", e.target.roofing.value);
    fd.append("yearBuild", e.target.yearBuild.value);
    fd.append("floorArea", e.target.floorArea.value);
    fd.append("basement", e.target.basement.value);
    fd.append("water", e.target.water.value);
    fd.append("home_name", e.target.home_name.value);
    fd.append("address", e.target.address.value);
    fd.append("price", e.target.price.value);
    fd.append("image", roomImg || "");
    if (!formError.description) {
      fd.append("description", roomDescription || "");
    }

    axios
      .post("https://uptown-mjbn.onrender.com/api/create/room", fd, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        navigate("/properties");

        toast.success("posted");
      })
      .catch((err) => {
        setFormError({});
        if (err.response) {
          const errorArray = err.response.data;
          //   console.log("eeror array here", errorArray);
          let temp = {};
          errorArray.forEach((error) => {
            temp[error.path] = `${error.path} is required`;
          });
          setFormError(temp);
        }
      });

    console.log(...fd);
  }
  console.log(formError);

  return (
    <div>
      <div className=" aboutImg  relative  -top-20 z-10">
        <Parallax
          strength={300}
          bgImage={bgImg}
          bgImageSize="cover"
          bgImageStyle={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
          }}
        >
          <div className="flex  h-[699px]     items-center justify-center  overflow-hidden  relative  before:content-[''] before:absolute before:block before:bg-gradient-to-b  before:from-white before:to-transparent before:inset-0 before:opacity-70  ">
            <div className=" absolute flex items-center justify-center text-center">
              <div className="  flex flex-col w-[100%]  gap-8  ">
                <h1 className="  text-5xl font-semibold">Properties</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block">SELL PROPERTY &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <section>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <h2 className=" text-textOne text-center text-xl">Fill the Form</h2>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-xl">
            <form
              className="space-y-1"
              action="#"
              onSubmit={(e) => handleCreateProperty(e)}
              method="POST"
            >
              <div className="flex gap-2">
                <div className=" w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Home Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="home_name"
                      type="text"
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-800">{formError.home_name}</small>
                </div>
                <div className=" w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lot Area
                  </label>
                  <div className="mt-1">
                    <input
                      name="lot_area"
                      type="text"
                      placeholder="lot area in sq ft"
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-800">{formError.lot_area}</small>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="bedrooms"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bedrooms
                  </label>
                  <div className="mt-1">
                    <input
                      name="bedRooms"
                      type="number"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-900 ">{formError.bedRooms}</small>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="bathrooms"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bathrooms
                  </label>
                  <div className="mt-1">
                    <input
                      name="bathRooms"
                      type="number"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-900 ">{formError.bathRooms}</small>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="floorArea"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Floor Area
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="floor area in sq ft"
                      name="floorArea"
                      type="text"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-900 ">{formError.floorArea}</small>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="garage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Garage
                  </label>
                  <select
                    type="garage"
                    name="garage"
                    className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  cursor-pointer dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    placeholder="choose"
                  >
                    <option defaultValue={"true"} defaultChecked value="true">
                      Available
                    </option>
                    <option value="false">Not-Available</option>
                  </select>
                  <small className="text-red-900 ">{formError.garage}</small>
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="roofing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Roofing
                  </label>
                  <select
                    type="roofing"
                    name="roofing"
                    className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  cursor-pointer dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    placeholder="Select a role"
                  >
                    <option defaultValue>Choose</option>
                    <option defaultValue={"new"} value="new">
                      new
                    </option>
                    <option value="old">old</option>
                    <option value="moderate">moderate</option>
                  </select>

                  <small className="text-red-900 ">{formError.roofing}</small>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="WaterSupply"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Water Supply
                  </label>
                  <select
                    type="water"
                    name="water"
                    className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  cursor-pointer dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    placeholder="Select a role"
                  >
                    <option defaultValue>Choose</option>
                    <option defaultValue={"true"} value="true">
                      Available
                    </option>
                    <option value="false">Not-Available</option>
                  </select>

                  <small className="text-red-900 ">{formError.water}</small>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="basement"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Basement
                  </label>
                  <select
                    type="basement"
                    name="basement"
                    className="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  cursor-pointer dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option defaultChecked defaultValue={"true"} value={"true"}>
                      Available
                    </option>
                    <option value={"false"}>Not-Available</option>
                  </select>
                  <small className="text-red-900 ">{formError.basement}</small>
                </div>
              </div>

              <div className="flex gap-2">
                <div className=" w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Year build
                  </label>
                  <div className="mt-1">
                    <input
                      name="yearBuild"
                      type="text"
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-800">{formError.yearBuild}</small>
                </div>
                {/* yeta baki number */}
                <div className="w-1/2">
                  <label
                    htmlFor="stories"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    House Stories
                  </label>
                  <div className="mt-1">
                    <input
                      name="stories"
                      type="number"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-900 ">{formError.stories}</small>
                </div>
                <div className=" w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      name="address"
                      type="text"
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-800">{formError.address}</small>
                </div>
                <div className=" w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-1">
                    <input
                      name="price"
                      type="text"
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 focus:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <small className="text-red-800">{formError.price}</small>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <ReactQuill
                    className=" h-40 mb-10"
                    placeholder="enter your description...."
                    theme="snow"
                    onChange={(value) => {
                      value === "<p><br></p>"
                        ? setFormError({
                            description: "*description is required",
                          })
                        : setFormError({});

                      !formError.description && setDescription(value);
                      console.log(value);
                    }}
                    // onChange={(value) => {
                    //   setJobData({ ...jobData, description: value });
                    // }}
                    // value={jobData.description}
                  />
                </div>
                <small className="text-red-800">{formError.description}</small>
              </div>

              <div className=" pt-2">
                <label
                  htmlFor="image"
                  className="block text-sm  font-medium leading-6 text-gray-900"
                >
                  Add Profile Picture
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => {
                      handleImage(e);
                    }}
                    name="image"
                    type="file"
                    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <small className="text-red-800">{formError.image}</small>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex shadow-orange-700 shadow-md w-full justify-center rounded-md bg-orange-200 px-3 py-1.5 text-sm font-semibold leading-6 text-greeb-400  hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateProperty;
