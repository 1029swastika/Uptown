import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

function Truck() {
  Aos.init({ duration: 300, easing: "ease-in-quart", once: true });

  return (
    <div className=" container mx-auto mt-20 ">
      <section className="  flex flex-col md:flex-row justify-center content-center items-center  px-8">
        <div className="  grow bg-jeep bg-cover bg-no-repeat  md:h-[700px] lg:h-[600px]  w-80 h-80 md:w-full md:p-64"></div>
        <div
          data-aos="fade-up"
          className="jeepBox md:relative  right-36 bg-white  "
        >
          <div className=" grow h-[500px] w-96 lg:h-[500px] lg:w-10/12  p-8 md:p-8 lg:p-12 flex flex-col gap-8 ">
            <h2 className=" text-3xl md:text-4xl  lg:text-5xl">
              We Put People First.
            </h2>
            <p className=" text-sm text-textThree">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className=" text-sm text-textThree">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </section>
      <div className="  flex flex-col gap-12 md:gap-2 md:flex-row md:flex-wrap justify-between items-center my-12">
        <div data-aos="fade-up" className=" flex items-center  gap-3 p-2">
          <strong className=" text-6xl font-semibold">
            <CountUp
              enableScrollSpy={true}
              end={320}
              delay={0.1}
              useEasing={true}
              redraw={false}
              duration={0.7}
            />
          </strong>
          <span className=" text-textThree">
            Area <br />
            Population
          </span>
        </div>
        <hr
          data-aos="fade-up"
          className=" hidden md:block w-[2px] h-20 bg-[#ededed]"
        />
        <div data-aos="fade-up" className=" flex items-center  gap-3 p-2">
          <strong className=" text-6xl font-semibold">
            <CountUp
              enableScrollSpy={true}
              end={1668}
              useEasing={true}
              delay={0.1}
              duration={0.7}
            />
          </strong>
          <span className=" text-textThree">
            Total <br />
            Properties
          </span>
        </div>
        <hr
          data-aos="fade-up"
          className=" hidden md:block w-[2px] h-20 bg-[#ededed]"
        />
        <div data-aos="fade-up" className=" flex items-center  gap-3 p-2">
          <strong className=" text-6xl font-semibold">
            <CountUp
              enableScrollSpy={true}
              end={2000}
              useEasing={true}
              delay={0.1}
              duration={0.7}
            />
          </strong>
          <span className=" text-textThree">
            Average <br />
            House
          </span>
        </div>
        <hr
          data-aos="fade-up"
          className=" hidden md:block w-[2px] h-20 bg-[#ededed]"
        />
        <div data-aos="fade-up" className=" flex items-center  gap-3 p-2">
          <strong className=" text-6xl font-semibold">
            <CountUp
              enableScrollSpy={true}
              end={1200}
              delay={0.1}
              useEasing={true}
              redraw={false}
              duration={0.7}
            />
          </strong>
          <span className=" text-textThree">
            Total <br />
            Branches
          </span>
        </div>
      </div>
    </div>
  );
}

export default Truck;
