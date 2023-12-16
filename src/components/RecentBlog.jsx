import BlogComponent from "./BlogComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function RecentBlog() {
  const [blogs, setBlogs] = useState([]);
  Aos.init({ duration: 300, easing: "ease-in-quart", once: true });

  useEffect(() => {
    axios
      .get(`https://uptown-mjbn.onrender.com/api/blog?perPage=4`)
      .then((data) => setBlogs(data.data[0].data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" pt-32 pb-8">
      <section>
        <div className=" flex flex-col  justify-center items-center">
          <div data-aos="fade-up" className="flex items-center gap-2">
            <hr className=" h-[2px] w-12 bg-myPink " />
            <h1 className=" text-[12px] font-semibold   text-myPink">BLOG</h1>
            <hr className=" h-[2px] w-12 bg-myPink" />
          </div>
          <h2
            data-aos="fade-up"
            className=" dark:text-white mb-24 text-4xl mt-4 font-semibold text-black"
          >
            Recent Blog
          </h2>

          {blogs.length !== 0 ? (
            <div className=" container mx-auto  pb-24">
              <section className=" grid  cursor-pointer space-y-2 justify-items-center  place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
                {blogs?.map((blog) => {
                  return (
                    <Link
                      data-aos="fade-up"
                      to={`/blog/detail/${blog._id}`}
                      key={blog._id}
                    >
                      <BlogComponent blog={blog} />
                    </Link>
                  );
                })}

                {/* <BlogComponent img={blog1} /> */}
              </section>
            </div>
          ) : (
            <div className=" my-40">
              <h2 className=" text-xl text-myPink text-center">
                Sorry No Such Blog Found
              </h2>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default RecentBlog;
