import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaHouse } from "react-icons/fa6";
import chain2 from "../assets/link2.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

const url = "https://uptown-mjbn.onrender.com/";

function ShowcaseRoom({ handleDelete, property }) {
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.user.value);
  console.log(userDetail);
  console.log(property);
  const {
    home_name,
    address,
    lot_area,
    price,
    bathRooms,
    bedRooms,
    image,
    created_by,
    _id,
  } = property;
  console.log(created_by);
  return (
    <div>
      <div className="group relative h-[410px] mt-16">
        <img
          className=" w-[90vw] md:w-80 h-64 object-cover  "
          src={url + image}
        />
        {userDetail ? (
          <div className="flex items-center gap-2 absolute top-4  right-4 z-40">
            <RiDeleteBin5Line
              onClick={() => {
                if (created_by !== userDetail._id) {
                  toast("You didn't create this Property");
                } else {
                  handleDelete(_id);
                }
              }}
              className=" cursor-pointer hidden group-hover:inline-block  text-xl   w-8  text-myPink"
            />
            {/* Delete */}
            {/* </button> */}

            <div
              className=" cursor-pointer hidden group-hover:inline-block"
              onClick={() => {
                if (created_by !== userDetail._id) {
                  toast("You didn't create this Property");
                } else {
                  navigate(`/properties/edit/${_id}`);
                }
              }}
            >
              {" "}
              <AiOutlineEdit className=" hidden group-hover:inline-block text-xl w-8 text-myPink" />
            </div>
          </div>
        ) : null}

        <Link
          to={`/properties/detail/${_id}`}
          className=" w-[70vw] sm:w-64 absolute bottom-0 bg-white left-8"
        >
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
        </Link>
      </div>
    </div>
  );
}

export default ShowcaseRoom;
