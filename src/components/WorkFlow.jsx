import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WorkFlow() {
  Aos.init({ duration: 300, easing: "ease-in-quart", once: true });

  return (
    <section className=" container mx-auto mt-12 ">
      <div className="workflow bg-room h-[990px] md:h-[900px] bg-cover mb-40  mx-6 relative">
        <section className=" flex flex-col items-center pt-12 md:pt-24 absolute  bg-gray-700 bg-opacity-40  md:bg-black w-full md:w-1/2 h-full">
          <div data-aos="fade-up" className="flex items-center gap-2">
            <hr className=" h-[2px] w-12 bg-myPink " />
            <h1 className=" text-[12px] font-semibold   text-gray-200">
              WORK FLOW
            </h1>
            <hr className=" h-[2px] w-12 bg-myPink" />
          </div>
          <h2
            data-aos="fade-up"
            className=" mb-4 md:mb-24  text-4xl md:text-4xl mt-4 font-semibold text-white"
          >
            How it works
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            <div
              data-aos="fade-up"
              className=" text-white  w-32   lg:w-48 flex gap-2 flex-col text-center items-center"
            >
              <span className=" bg-myPink w-20 h-20 lg:w-24 lg:h-24 rounded-full text-center flex items-center justify-center text-4xl">
                01
              </span>
              <h2 className=" text-lg lg:text-2xl">Evaluate Property</h2>
              <p className=" text-gray-200 text-xs lg:text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className=" text-white  w-32   lg:w-48 flex gap-2 flex-col text-center items-center"
            >
              <span className=" bg-myPink w-20 h-20 lg:w-24 lg:h-24 rounded-full text-center flex items-center justify-center text-4xl">
                02
              </span>
              <h2 className=" text-lg lg:text-2xl">Meet Your Agent</h2>
              <p className=" text-gray-200 text-xs lg:text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className=" text-white  w-32   lg:w-48 flex gap-2 flex-col text-center items-center"
            >
              <span className=" bg-myPink w-20 h-20 lg:w-24 lg:h-24 rounded-full text-center flex items-center justify-center text-4xl">
                03
              </span>
              <h2 className="  text-lg lg:text-2xl">Close the Deal</h2>
              <p className=" text-gray-200 text-xs lg:text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className=" text-white w-32   lg:w-48 flex gap-2 flex-col text-center items-center"
            >
              <span className=" bg-myPink w-20 h-20 lg:w-24 lg:h-24 rounded-full text-center flex items-center justify-center text-4xl">
                04
              </span>
              <h2 className="  text-lg lg:text-2xl">Have Your Property</h2>
              <p className=" text-gray-200 text-xs lg:text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WorkFlow;
