import StarRatings from "react-star-ratings";
import ReviewBox from "./ReviewBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function ReviewSection({
  _id,
  reviews,
  reviewLength,

  comment,
  setComment,
  rating,
  setRating,
  handleComment,
}) {
  useEffect(() => {
    axios.get();
  });

  console.log("this also rerebder");
  return (
    <div>
      <ToastContainer />
      <div>
        <div className=" mt-12 ">
          <div className=" py-10">
            <h2 className=" text-xl  mb-4 text-textThree font-extralight">
              {reviewLength} Reviews
            </h2>
            <div>
              {reviews?.map((cmt) => {
                return (
                  <div className=" mt-4  " key={cmt.created_by}>
                    <div className="flex flex-col">
                      <ReviewBox cmt={cmt} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <form
            onSubmit={(e) => handleComment(e)}
            className=" p-14 bg-[#f8f9fa] "
          >
            <div className=" flex flex-col gap-4">
              <h2 className=" text-xl font-light text-textOne ">
                Leave a review
              </h2>
              <div></div>
              <div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  className=" outline-none border w-full  h-36 md:h-28"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <span className=" text-textOne">Rate this Post</span>
              <StarRatings
                rating={rating}
                starRatedColor="#EBEB00"
                changeRating={setRating}
                numberOfStars={5}
                name="rating"
                starHoverColor="#EBEB00"
                starDimension="25"
                starSpacing="0"
              />
            </div>
            <button className=" p-2 md:p-4 rounded-md mt-4 text-white  bg-myPink ">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
