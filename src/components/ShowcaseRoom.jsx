import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import chain2 from "../assets/link2.png";
const url = "https://jobholic.onrender.com/";

function ShowcaseRoom({ property }) {
  console.log(property);

  const { home_name, address, lot_area, price, bathRooms, bedRooms, image } =
    property;

  return (
    <div>
      <div className=" relative h-[410px] mt-16">
        <img
          className=" w-[90vw] md:w-80 h-64 object-cover  "
          src={url + image}
        />
        <div className=" w-[70vw] sm:w-64 absolute bottom-0 bg-white left-8">
          <div className="  p-5 flex flex-col gap-2 text-start text-textThree shadow-md hover:shadow-xl relative  ">
            <h2>
              ${price}
              <span className=" text-[12px] text-textThree ">/mo</span>
            </h2>
            <div className=" flex items-center gap-2   ">
              <IoBedOutline />
              <span className=" mr-4">{bedRooms}</span>
              <LuBath />
              <span>{bathRooms}</span>
            </div>
            <div className=" flex items-center gap-2">
              <FaHouse />
              <span>{lot_area} sqft</span>
            </div>
            <p className=" text-textTwo text-lg font-semibold"> {home_name}</p>
            <p>{address}</p>
            <div className=" absolute bottom-0 right-0 bg-myPink p-3  rounded-ss-3xl">
              <img className=" w-4 " src={chain2}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseRoom;
