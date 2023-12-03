import axios from "axios";
import { useEffect, useState } from "react";

import StarRatings from "react-star-ratings";

const url = "https://jobholic.onrender.com/";

function ReviewBox({ cmt }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jobholic.onrender.com/api/user/${cmt.created_by}`)
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  }, []);

  const { image, username } = user;
  const { rating, comment, reviewDate } = cmt;

  // console.log(user);
  return (
    <div className="flex gap-4  p-1 items-start ">
      <div className="">
        <img
          className="w-12  aspect-square  md:w-10 rounded-full"
          src={url + image}
        />
      </div>
      <div className=" flex flex-col gap-1 items-start">
        <h2 className=" text-textTwo text-base">{username}</h2>
        {cmt.rating ? (
          <div className="flex items-center gap-2">
            <StarRatings
              rating={cmt.rating}
              starDimension="20px"
              starSpacing="0px"
              starRatedColor="#EBEB00"
            />
          </div>
        ) : null}
        <span className=" text-xs text-gray-400">{reviewDate}</span>
        <p className=" text-xs text-textThree">{comment}</p>
      </div>
    </div>
  );
}

export default ReviewBox;
