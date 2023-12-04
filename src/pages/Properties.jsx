import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import ShowcaseRoom from "../components/ShowcaseRoom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "rc-pagination/lib/Pagination";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [currentSearchParams, setSearchParams] = useSearchParams();

  const params = useLocation();
  const [paginationData, setpaginationData] = useState({
    total: 10,
    page: 1,
    perPage: 6,
  });
  Aos.init({ duration: 300, easing: "ease-in-quart", once: true });

  useEffect(() => {
    axios
      .get(`https://uptown-mjbn.onrender.com/api/room${params.search}`)
      .then((res) => {
        setProperties(res.data[0].data);
        if (res.data[0].metadata[0]) {
          setpaginationData(res.data[0].metadata[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [params.search]);
  console.log(properties);
  console.log(properties);
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
                <h1 className="  text-5xl font-semibold">Properties</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> PROPERTIES &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <section className=" container mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
          {properties?.map((property) => {
            return (
              <Link
                data-aos="fade-up"
                to={`/properties/detail/${property._id}`}
                key={property._id}
              >
                <ShowcaseRoom property={property} />
              </Link>
            );
          })}
        </div>
        <div className=" mt-10">
          <Pagination
            total={paginationData.total}
            pageSize={paginationData.perPage}
            prevIcon="<"
            nextIcon=">"
            onChange={(pgNumber) => {
              console.log(pgNumber);
              currentSearchParams.set("page", pgNumber);
              setSearchParams(currentSearchParams);
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Properties;
