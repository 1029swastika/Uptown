import ShowcaseRoom from "./ShowcaseRoom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Offers() {
  const [properties, setProperties] = useState([]);
  Aos.init({ duration: 300, easing: "ease-in-quad", once: true });

  useEffect(() => {
    axios
      .get("https://jobholic.onrender.com/api/room?perPage=3")
      .then((res) => setProperties(res.data[0].data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" pt-20 ">
      <div
        data-aos="fade-up"
        className=" container mx-auto flex items-center justify-center flex-col text-center"
      >
        <div className="flex items-center gap-2 ">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-[12px] font-semibold   text-myPink">
            WHAT WE OFFER
          </h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
        <h2 className=" text-4xl mt-4 font-semibold">
          Exclusive Offer For You
        </h2>
        <div className=" flex  flex-col md:flex-row md:flex-wrap gap-8">
          {properties?.map((property) => {
            return (
              <Link
                data-aos="fade-up"
                to={`/properties/detail/${property._id}`}
                key={property._id}
              >
                <ShowcaseRoom property={property} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Offers;
