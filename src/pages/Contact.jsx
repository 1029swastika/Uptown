import { Parallax } from "react-parallax";
import { FaRegMap } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";

import bgImg from "../assets/bgImg.jpg";
import { NavLink } from "react-router-dom";

function Contact() {
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
                <h1 className="  text-5xl font-semibold">Contact Us</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> CONTACT &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <section className=" container mx-auto">
        <div className="  flex flex-col gap-12 md:gap-2 md:flex-row md:flex-wrap justify-between items-center my-12">
          <div className=" w-52 flex flex-col items-center justify-center  gap-3 p-2">
            <FaRegMap className=" text-5xl text-textThree" />
            <span className=" text-textTwo  font-semibold text-xl">
              {" "}
              Address:
            </span>
            <p className=" text-textThree">
              198 West 21th Street, Suite 721 New York NY 10016
            </p>
          </div>
          <hr className=" hidden md:block w-[2px] h-20 bg-[#ededed]" />
          <div className="w-52 flex flex-col items-center justify-center  gap-3 p-2">
            <IoIosPhonePortrait className=" text-5xl text-textThree" />
            <span className=" text-textTwo  font-semibold text-xl">
              {" "}
              Phone:
            </span>
            <p className=" text-textThree">+27 456 7895</p>
          </div>
          <hr className=" hidden md:block w-[2px] h-20 bg-[#ededed]" />
          <div className="w-52 flex flex-col items-center justify-center  gap-3 p-2">
            <CiMail className=" text-5xl text-textThree" />
            <span className=" text-textTwo  font-semibold text-xl">
              {" "}
              Email:
            </span>
            <p className=" text-textThree">info@yahoo.com</p>
          </div>
        </div>
      </section>
      <section className=" container mx-auto pb-32">
        <div className=" text-xl text-textThree text-center py-8">
          <p>If you got any questions</p>
          <p>please do not hesitate to send us a message</p>
        </div>
        <div className=" flex items-center justify-center">
          <form className=" flex flex-col gap-3 w-2/3 sm:w-2/4 ">
            <input
              className=" border-2 px-1 py-2 rounded-md drop-shadow-sm  outline-none bg-[#f8f9fa]"
              placeholder=" Your Name"
            />
            <input
              className=" border-2 px-1 py-2 rounded-md drop-shadow-sm  outline-none bg-[#f8f9fa]"
              placeholder="Your Email"
            />
            <input
              className=" border-2 px-1 py-2 rounded-md drop-shadow-sm  outline-none bg-[#f8f9fa]"
              placeholder="Subject"
            />
            <textarea
              className=" border-2 px-1 h-44 py-2 rounded-md drop-shadow-sm  outline-none bg-[#f8f9fa]"
              placeholder="Message"
            ></textarea>
            <button className=" bg-myPink w-48 px-4 py-2 text-white rounded-md ">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
