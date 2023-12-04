import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "https://uptown-mjbn.onrender.com/";

// import "react-toastify/dist/r";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/userSlice";

function Header() {
  const [open, setOpen] = useState(false);
  //change navbar bgcolor when scroll
  const [color, setColor] = useState(false);
  // console.log(color);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function changeColor() {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function handleLogout() {
    toast("Logged Out Successfully");
    navigate("/");

    dispatch(removeToken());
  }
  const userDetail = useSelector((state) => state.user.value);
  // console.log(userDetail);

  window.addEventListener("scroll", changeColor);
  function handleburger() {
    setOpen((state) => !state);
  }

  return (
    <div
      className={` w-full   md:mx-auto relative 
       ${color === true ? "sticky" : "relative"}
       md:bg-transparent top-0 ${color === true ? "md:top-0" : "md:top-4"}   
       ${color === true ? "md:w-full" : " md:w-full"}
       z-40 transition-colors 
       ${color === true ? "shadow-md" : "shadow-none"}
        `}
    >
      <ToastContainer />
      <div
        className={`${color === true ? "bg-white" : "bg-black"}  px-8   ${
          color === true ? "md:bg-white" : "md:bg-transparent"
        }  transition-colors`}
      >
        <div className="flex   flex-wrap box-border  justify-between py-4 items-center">
          <h2
            className={` ${
              color === true ? "text-black" : "text-white"
            }     md:text-black text-lg font-semibold transition-colors`}
          >
            Uptown
          </h2>

          <div
            className={` ${
              color === true ? "text-textTwo" : "text-white"
            } hidden md:block  md:text-black transition-colors `}
          >
            <nav className=" flex gap-8  text-sm items-center   px-1  py-0.5">
              {userDetail ? (
                <div className=" flex items-center gap-2">
                  <img
                    className=" w-8 h-8  object-cover  aspect-square rounded-full"
                    src={url + userDetail.image}
                  />

                  <span className="  text-textOne ">{userDetail.username}</span>
                </div>
              ) : null}
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/agents"}>Agents</NavLink>
              <NavLink to={"/services"}>Services</NavLink>
              <NavLink to={"/properties"}>Properties</NavLink>
              <NavLink to={"/blog"}>Blog</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              {userDetail ? (
                <span
                  className=" cursor-pointer  font-semibold"
                  onClick={() => handleLogout()}
                >
                  Log Out
                </span>
              ) : (
                <Link className=" font-semibold" to={"/login"}>
                  Login
                </Link>
              )}
            </nav>
          </div>

          {/* Mobile view menu */}

          {open === true ? (
            <div>
              <nav
                className={`
                 ${color === true ? "text-textTwo" : "text-white"} 
                 ${color === true ? "bg-white" : "bg-black"} 
                
                flex flex-col gap-4 absolute top-14 pl-8  transition-colors shadow-sm pb-4  w-full left-0   text-base   px-1  py-0.5`}
              >
                <ul onClick={() => handleburger()}>
                  {userDetail ? (
                    <div className=" flex items-center justify-end py-4 mr-4 gap-2">
                      <img
                        className=" w-8 h-8 rounded-full"
                        src={url + userDetail.image}
                      />

                      <span className="  text-gray-300 ">
                        {userDetail.username}
                      </span>
                    </div>
                  ) : null}
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/agents"}>Agents</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/services"}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/properties"}>Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  {userDetail ? (
                    <span
                      className=" cursor-pointer  font-semibold"
                      onClick={() => handleLogout()}
                    >
                      Log Out
                    </span>
                  ) : (
                    <Link className=" font-semibold" to={"/login"}>
                      Login
                    </Link>
                  )}
                </ul>
              </nav>
            </div>
          ) : null}

          {/* Hamburger here */}
          <div
            className={` ${
              color === true ? "text-textTwo" : "text-white"
            }  md:hidden`}
          >
            <button
              onClick={() => handleburger()}
              className=" flex items-center gap-1 cursor-pointer"
            >
              {<FaBars />} MENU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
