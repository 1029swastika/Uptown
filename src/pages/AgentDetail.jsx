import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { Link, useParams } from "react-router-dom";

import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://jobholic.onrender.com/";

function AgentDetail() {
  const [agentDetail, setAgentDetail] = useState([]);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    axios
      .get(`https://jobholic.onrender.com/api/agent/${params.id}`)
      .then((data) => setAgentDetail(data.data));
  }, []);
  console.log(agentDetail);

  const {
    image,
    name,
    company,
    phone,
    experience,
    email,
    price,
    total_sales,
    home_types,
    description,
  } = agentDetail;

  return (
    <div>
      <div className=" aboutImg  relative  -top-16 z-10">
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
                <h1 className="  text-5xl font-semibold">Agent Details</h1>
                <p className=" text-textOne inline-block">
                  <Link className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </Link>
                  <Link className="  hover:text-myPink " to={"/agents"}>
                    AGENTS &gt;
                  </Link>{" "}
                  <p className=" inline-block"> DETAILS &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
        <a href="#mypara" className=" flex items-center justify-center  ">
          <div className=" bg-myPink absolute z-40  bottom-14 w-20 h-20  rounded-full">
            <span className="arrow"></span>
          </div>
        </a>
      </div>
      <div className=" flex  items-center justify-center mb-12">
        <div className="flex items-center gap-2  text-center">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-3xl text-center font-semibold   text-myPink">
            AGENT DETAILS
          </h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
      </div>
      <section className=" pb-24 container mx-auto  justify-items-center md:px-8 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row w-full gap-8 py-8  items-center justify-center ">
          <div className=" md:grow-0">
            <img
              className="  object-cover  w-72  drop-shadow-lg    "
              src={url + image}
            />
          </div>
          <div className=" md:grow">
            <div className="flex flex-col gap-7">
              <div className=" flex flex-col gap-2">
                <h2 className=" text-3xl font-bold">{name}</h2>
                <h2 className=" text-xl text-textOne  font-semibold">
                  {company}
                </h2>
              </div>
              <div>
                <hr className=" h-[1px] bg-textThree md:w-1/2" />
                <div className=" flex w-full md:w-1/2 gap-4 justify-between">
                  <div className="grow flex flex-col gap-2">
                    <h2 className=" text-2xl font-normal text-center ">
                      {total_sales}
                    </h2>
                    <p className=" text-center text-lg  text-textOne  font-light">
                      Total Sales
                    </p>
                  </div>
                  <hr className=" w-[1px] md:w-[0.2px] bg-gray-200  h-10 my-auto" />

                  <div className="grow flex flex-col gap-2">
                    <h2 className=" text-2xl font-normal text-center ">
                      {price}k
                    </h2>
                    <p className=" text-center text-lg  text-textOne  font-light">
                      Average Price
                    </p>
                  </div>
                  <hr className=" w-[0.2px] bg-gray-200 h-10 my-auto" />

                  <div className="grow flex flex-col gap-2">
                    <h2 className=" text-2xl font-normal text-center ">
                      {experience}
                    </h2>
                    <p className=" text-center text-lg  text-textOne  font-light">
                      Years of Experience
                    </p>
                  </div>
                </div>
                <hr className=" h-[1px] bg-textThree md:w-1/2" />
              </div>
              <div>
                <h2 className=" text-xl text-myPink rounded-ss-3xl   border  border-r-0 border-b-0 p-2  border-t-8   border-myPink inline-block ">
                  Contact Details
                </h2>
                <div className=" flex gap-2 items-center pl-2">
                  <h2 className=" text-black text-lg ">Phone:</h2>
                  <p className=" text-textOne  font-light">{phone}</p>
                </div>
                <div className=" flex gap-4 items-center pl-2">
                  <h2 className=" text-black text-lg ">Email:</h2>
                  <p className=" text-textOne  font-light">{email}</p>
                </div>
              </div>
              <div className=" flex flex-col md:flex-row gap-2 items-start ml-2  md:items-center">
                <h2 className=" inline-block text-lg font-normal ">
                  Home Types :
                </h2>
                <div className="flex gap-4 text-light text-textOne">
                  {home_types?.map((home) => {
                    return <p key={home}>{home}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container mx-auto flex items-start  justify-center md:justify-end">
          <div className=" w-full md:w-1/2 flex flex-col gap-4">
            <h2 className=" text-2xl font-semibold text-black">About {name}</h2>
            <p className=" text-textOne">
              {description
                ? description
                : "Meet an adept agent who represents sellers in the dynamic real estate market. With a keen eye for detail and a comprehensive understanding of property values, they bring a wealth of experience to the table. Diligently navigating the intricacies of the housing market, they work tirelessly to ensure sellers receive optimal returns for their properties. From crafting compelling property listings that highlight unique features to negotiating favorable deals, this agent is dedicated to streamlining the selling process for clients. Armed with market insights and a commitment to professionalism, they are not just an agent; they're a trusted ally for those looking to navigate the complexities of selling a home with confidence and success."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentDetail;
