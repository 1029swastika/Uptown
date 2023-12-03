import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { IoIosSearch } from "react-icons/io";
import "../App.css";
import Service from "../components/Service";
import Offers from "../components/Offers";
import WorkFlow from "../components/WorkFlow";
import Truck from "../components/Truck";
import Testimonials from "../components/Testimonials";
import Agents from "../components/Agents";
import RecentBlog from "../components/RecentBlog";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  Aos.init({ duration: 400, easing: "ease-in-sine" });
  function handleScroll() {
    window.scrollBy(0, 600);
  }
  return (
    <div>
      <div className=" frontImg  relative  -top-20 z-10">
        <Parallax
          strength={300}
          bgImage={bgImg}
          bgImageSize="cover"
          bgImageStyle={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        >
          <div className="flex  h-[699px]     items-center justify-center  overflow-hidden  relative  before:content-[''] before:absolute before:block before:bg-gradient-to-b  before:from-white before:to-transparent before:inset-0 before:opacity-70  ">
            <div className=" absolute top-[18%] md:top-[25%] flex items-center justify-center text-center">
              <div
                data-aos="fade-up"
                className="  flex flex-col md:w-2/4  gap-8  "
              >
                <h1 className="  text-5xl font-semibold">
                  The Simplest <br /> Way to Find Property
                </h1>
                <p className=" text-textOne">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts
                </p>
                <form>
                  <div className="  flex mx-2  bg-white rounded-full">
                    <input
                      className="p-4 rounded-full  rounded-r-none grow outline-none"
                      placeholder=" Search Location"
                    />
                    <button className=" grow-0 bg-myPink p-4 rounded-r-full rounded-b-full">
                      <IoIosSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Parallax>
        <div
          onClick={() => handleScroll()}
          className=" cursor-pointer flex items-center justify-center  "
        >
          <div className=" bg-myPink absolute z-40  -bottom-8 w-20 h-20  rounded-full">
            <span className="arrow"></span>
          </div>
        </div>
      </div>
      <div className=" container mx-auto">
        <Service />
        <Offers />
        <WorkFlow />
        <Truck />
        <Testimonials />
        <Agents />
        <RecentBlog />
      </div>
    </div>
  );
}

export default Home;
