import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";
import HappyClient from "./HappyClient";
import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  const [clients, setClients] = useState([]);
  Aos.init({ duration: 200, easing: "ease-in-quart", once: true });

  useEffect(() => {
    axios
      .get(`https://uptown-mjbn.onrender.com/api/happyclient`)
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className=" container mx-auto pt-20 pb-20 ">
        <div
          data-aos="fade-up"
          className=" flex flex-col  justify-center items-center"
        >
          <div className="flex items-center gap-2">
            <hr className=" h-[2px] w-12 bg-myPink " />
            <h1 className=" text-[12px] font-semibold   text-myPink">
              TESTIMONIAL
            </h1>
            <hr className=" h-[2px] w-12 bg-myPink" />
          </div>
          <h2 className=" dark:text-white mb-24 text-4xl mt-4 font-semibold text-black">
            Happy Clients
          </h2>
        </div>

        <div data-aos="fade-up" className=" px-12">
          <Slider {...settings}>
            {clients?.map((client) => {
              return (
                <div key={client._id} className=" p-4">
                  <HappyClient client={client} />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
