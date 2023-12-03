import { LiaPiggyBankSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { CiLock } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";

function Service() {
  Aos.init({ duration: 200, easing: "ease-in-sine", once: true });

  return (
    <div>
      <div className=" pt-12">
        <div
          data-aos="fade-up"
          className=" container mx-auto flex items-center justify-center flex-col text-center"
        >
          <div className="flex items-center gap-2">
            <hr className=" h-[2px] w-12 bg-myPink " />
            <h1 className=" text-[12px] font-semibold   text-myPink">
              OUR SERVICES
            </h1>
            <hr className=" h-[2px] w-12 bg-myPink" />
          </div>
          <h2 className=" text-3xl">The smartest way to buy a home</h2>
        </div>
        <div className=" container mx-auto px-8 flex  flex-col md:flex-row  items-center md:justify-around mt-12">
          <div
            data-aos="fade-up"
            className=" flex flex-col p-4 gap-2 justify-center items-center w-52"
          >
            <LiaPiggyBankSolid className=" text-7xl text-myPink" />
            <h2 className=" text-xl text-textTwo">No Downpayment</h2>
            <p className=" text-sm text-textThree break-words text-center">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" flex flex-col gap-2 p-4 justify-center items-center w-52"
          >
            <IoWalletOutline className=" text-7xl text-myPink" />
            <h2 className=" text-xl text-textTwo">All Cash Offer</h2>
            <p className=" text-sm text-textThree break-words text-center">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" flex flex-col gap-2 p-4 justify-center items-center w-52"
          >
            <SiGoogledocs className=" text-7xl text-myPink" />
            <h2 className=" text-xl text-textTwo">Experts in Your Corner</h2>
            <p className=" text-sm text-textThree break-words text-center">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div
            data-aos="slide-up"
            className=" flex flex-col gap-2 p-4 justify-center items-center w-52"
          >
            <CiLock className=" text-7xl text-myPink" />
            <h2 className=" text-xl text-textTwo">Locked in Pricing</h2>
            <p className=" text-sm text-textThree break-words text-center">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
