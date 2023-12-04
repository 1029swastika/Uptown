import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { Link, NavLink } from "react-router-dom";

import "../App.css";
import AgentComponent from "../components/AgentComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("https://uptown-mjbn.onrender.com/api/agent")
      .then((data) => setAgents(data.data[0].data));
  }, []);
  console.log(agents);

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
                <h1 className="  text-5xl font-semibold">Agents</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> AGENTS &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div className=" flex  items-center justify-center mb-12">
        <div className="flex items-center gap-2  text-center">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-3xl text-center font-semibold   text-myPink">
            AGENTS
          </h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
      </div>
      <section className=" pb-24 container mx-auto  justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {agents?.map((data) => {
          return (
            <Link to={`/agents/detail/${data._id}`} key={data._id}>
              <AgentComponent
                img={data.image}
                name={data.name}
                company={data.company}
                total_sales={data.total_sales}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Agents;
