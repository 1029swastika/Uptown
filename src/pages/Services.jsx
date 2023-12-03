import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { NavLink } from "react-router-dom";

import "../App.css";
import Service from "../components/Service";
import WorkFlow from "../components/WorkFlow";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Services() {
  const [message, setMessage] = useState("");

  function handleMessage(e) {
    e.preventDefault();
    axios
      .post(
        "https://jobholic.onrender.com/api/happyclient/create",
        {
          message: message,
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => toast("Successfully Submitted"))
      .catch((Err) => console.log(Err));
  }
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
                <h1 className="  text-5xl font-semibold">Services</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> SERVICES &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <Service />
      <WorkFlow />
      <section className=" container mx-auto my-12">
        <div className=" flex  justify-end md:mx-32 mt-40  ">
          <p className=" text-sm text-textThree w-2/3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className=" mt-20">
          <form
            onSubmit={(e) => handleMessage(e)}
            className=" p-14 bg-[#f8f9fa] "
          >
            <div className=" flex flex-col gap-4">
              <h2 className=" text-lg font-light text-textOne ">
                <span className=" text-2xl text-textTwo block">
                  {" "}
                  Share your thoughts!
                </span>{" "}
                Feel free to leave a comment or message about your experience
                with our services. We value your feedback!
              </h2>
              <div></div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  className=" outline-none border w-full  h-36 md:h-28"
                />
              </div>
            </div>

            <button className=" p-2 md:p-4 rounded-md mt-4 text-white  bg-myPink ">
              Post Feedback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Services;
