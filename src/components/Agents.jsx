import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AgentComponent from "./AgentComponent";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Agents() {
  const [agents, setAgents] = useState([]);
  Aos.init({ duration: 300, easing: "ease-in-quart", once: true });

  useEffect(() => {
    axios
      .get("https://uptown-mjbn.onrender.com/api/agent?perPage=4")
      .then((data) => setAgents(data.data[0].data));
  }, []);
  return (
    <div className=" container mx-auto">
      <div className=" flex flex-col  justify-center items-center">
        <div data-aos="fade-up" className="flex items-center gap-2">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-[12px] font-semibold   text-myPink">AGENTS</h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
        <h2
          data-aos="fade-up"
          className=" dark:text-white mb-24 text-4xl mt-4 font-semibold text-black"
        >
          Our Agents
        </h2>

        <section className=" pb-24 container mx-auto  justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents?.map((data) => {
            return (
              <Link
                data-aos="fade-up"
                to={`/agents/detail/${data._id}`}
                key={data._id}
              >
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
    </div>
  );
}

export default Agents;
