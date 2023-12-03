import { Parallax, Background } from "react-parallax";
import { IoIosSearch } from "react-icons/io";
import bgImg from "../assets/bgImg.jpg";
import { NavLink } from "react-router-dom";

import "../App.css";
import Truck from "../components/Truck";
import Testimonials from "../components/Testimonials";

function About() {
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
                <h1 className="  text-5xl font-semibold">About Us</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> ABOUT US &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <Truck />
      <Testimonials />
    </div>
  );
}

export default About;
