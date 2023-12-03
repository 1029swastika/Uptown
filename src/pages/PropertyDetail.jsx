import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import "../App.css";

import { Link, useParams } from "react-router-dom";
import { MdCheck } from "react-icons/md";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import ReviewSection from "../components/ReviewSection";

const url = "https://jobholic.onrender.com/";

function PropertiesDetail() {
  const [propertyDetail, setPropertyDetail] = useState([]);
  const [reviewLength, setReviewLength] = useState(0);
  const [submitCount, setSubmitCount] = useState(0);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [menu, setMenu] = useState("features");
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://jobholic.onrender.com/api/room/${params.id}`)
      .then((data) => {
        let reviews = data.data.reviews;
        let reviewsLength = reviews.length;

        setReviewLength(reviewsLength);

        setPropertyDetail(data.data);
      })
      .catch((Err) => console.log(Err));
  }, []);
  console.log(propertyDetail);
  const {
    home_name,
    reviews,
    address,
    lot_area,
    floorArea,
    price,
    bathRooms,
    bedRooms,
    stories,
    basement,
    roofing,
    garage,
    water,
    description,
    yearBuild,
    image,
    _id,
    agent,
  } = propertyDetail;

  function handleMenu(menutitle) {
    if (menutitle === "features") {
      setMenu("features");
    }
    if (menutitle === "description") {
      setMenu("description");
    }
    if (menutitle === "review") {
      setMenu("review");
    }
  }
  function handleComment(e) {
    e.preventDefault();
    axios
      .put(
        `https://jobholic.onrender.com/api/room/review/${_id}`,
        {
          rating: rating,
          comment: comment,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setPropertyDetail(res.data);
        setComment("");
        setRating(0);
        console.log("Before:", submitCount);
        setSubmitCount((prevCount) => {
          console.log("Before:", prevCount);
          console.log("After:", prevCount + 1);

          return prevCount + 1;
        });
        console.log("After:", submitCount);
        toast("Commented");
      })
      .catch((Err) => {
        toast.error(Err.response?.data);
        console.log(Err);
      });
  }
  console.log("After:", submitCount);

  console.log(menu);
  console.log(_id);

  return (
    <div>
      <ToastContainer />
      <div className=" aboutImg  relative  -top-16 z-10">
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
                <h1 className="  text-5xl font-semibold">Property Details</h1>
                <p className=" text-textOne inline-block">
                  <Link className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </Link>
                  <Link className="  hover:text-myPink " to={"/properties"}>
                    PROPERTIES &gt;
                  </Link>{" "}
                  <p className=" inline-block"> DETAILS &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <div className=" container mx-auto">
        <section>
          <div>
            <img src={url + image} />
            <div className=" flex flex-col items-center gap-2 mt-8 mb-8">
              <p className=" text-gray-400 text-center font-thin ">{address}</p>
              <h2 className=" text-3xl  text-center text-textOne  ">
                {home_name}
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex gap-10 text-gray-400 items-center justify-center">
            <span
              onClick={() => handleMenu("features")}
              className={` ${
                menu === "features" ? "text-textTwo" : null
              } cursor-pointer   `}
            >
              Features
            </span>
            <span
              onClick={() => handleMenu("description")}
              className={` ${
                menu === "description" ? "text-textTwo" : null
              } cursor-pointer`}
            >
              Description
            </span>
            <span
              onClick={() => handleMenu("review")}
              className={` ${
                menu === "review" ? "text-textTwo" : null
              }  cursor-pointer`}
            >
              Review
            </span>
          </div>
          <hr className=" h-[1px] w-full bg-gray-300" />
          {menu === "features" && (
            <div className=" my-8 flex justify-between w-1/2 mx-auto">
              <div>
                <ul>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    <MdCheck className=" text-green-600" />
                    Lot Area: {lot_area} SQ FT
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Bed Rooms: {bedRooms}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Bath Rooms: {bathRooms}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Garage: {garage === "true" ? "yes" : "no"}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Roofing: {roofing}
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" /> Floor Area:{" "}
                    {floorArea} SQ FT
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Year Build: {yearBuild}{" "}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    water: {water === "true" ? "yes" : "no"}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Stories: {stories}
                  </li>
                  <li className="flex items-center gap-2 text-base text-textThree">
                    {" "}
                    <MdCheck className=" text-green-600" />
                    Price: {price}
                  </li>
                </ul>
              </div>
            </div>
          )}
          {menu === "description" ? (
            <div className=" my-8 text-start flex items-center justify-center">
              <p className="w-2/3 text-sm text-textThree  font-light leading-loose ">
                {description}
              </p>{" "}
            </div>
          ) : null}
          {menu === "review" && (
            <ReviewSection
              reviewLength={reviewLength}
              _id={_id}
              submitCount={submitCount}
              setSubmitCount={setSubmitCount}
              reviews={reviews}
              rating={rating}
              setRating={setRating}
              comment={comment}
              setComment={setComment}
              handleComment={handleComment}
            />
          )}
          <div className=" flex items-center justify-center my-20">
            <Link
              className=" bg-myPink text-gray-50 px-4 py-1 rounded-md hover:scale-110  hover:drop-shadow-lg  transition-transform"
              to={`/agents/detail/${agent}`}
            >
              Contact Recommended Agent
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PropertiesDetail;
