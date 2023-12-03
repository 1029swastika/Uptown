import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  const todayDate = new Date().getFullYear();
  return (
    <footer className=" py-20 bg-mygray ">
      <div className="container mx-auto">
        <section className=" bg-mygray  grid-cols-1  sm:grid-cols-3 md:grid-cols-4 grid lg:grid-cols-5">
          <div className=" flex flex-col w-full sm:w-48  md:w-52 gap-4 p-4">
            <h2 className=" text-xl">Uptown</h2>
            <p className=" text-textThree break-words">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className=" text-myPink flex mt-4 text-3xl gap-2">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
          <div className=" flex flex-col  w-full sm:w-48  md:w-52 gap-4 p-4">
            <h2 className=" text-xl">Community</h2>
            <ul>
              <li className="">
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Search properties
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                For Agents
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Reviews
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-1" />{" "}
                FAQs
              </li>
            </ul>
          </div>
          <div className=" flex flex-col w-full sm:w-48  md:w-52 gap-4 p-4">
            <h2 className=" text-xl">About Us</h2>
            <ul>
              <li className="">
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Our Story
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Meet the team
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Careers
              </li>
            </ul>
          </div>
          <div className=" flex flex-col w-full sm:w-48  md:w-52 gap-4 p-4">
            <h2 className=" text-xl">Company</h2>
            <ul>
              <li className="">
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                About Us
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Press
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-2" />
                Contact
              </li>
              <li>
                <FaLongArrowAltRight className=" inline-block  text-myPink mr-1" />{" "}
                Careers
              </li>
            </ul>
          </div>
          <div className=" flex flex-col  w-full sm:w-48  md:w-52 gap-4 p-4">
            <h2 className=" text-xl">Have a Questions?</h2>
            <ul className=" space-y-4">
              <li className="flex gap-2 items-center">
                <FaLocationDot className=" inline-block  text-4xl text-myPink " />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt className=" inline-block  text-xl text-myPink mr-2" />
                +2 32955 210
              </li>
              <li className="flex gap-2 items-center">
                <IoIosMail className=" inline-block text-2xl  text-myPink mr-2" />
                info@yahoo.com
              </li>
            </ul>
          </div>
        </section>
        <div className=" bg-mygray flex items-center justify-center">
          <p className=" text-sm text-textThree">
            Copyright © {todayDate} All rights reserved | This template is made
            with by Milan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
