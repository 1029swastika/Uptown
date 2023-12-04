import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";
import BlogComponent from "../components/BlogComponent";

import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const params = useLocation();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://uptown-mjbn.onrender.com/api/blog${params.search}`)
      .then((data) => setBlogs(data.data[0].data))
      .catch((err) => console.log(err));
  }, []);
  console.log(blogs);

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
                <h1 className="  text-5xl font-semibold">Blog</h1>
                <p className=" text-textOne inline-block">
                  <NavLink className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </NavLink>{" "}
                  <p className=" inline-block"> BLOG &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      {blogs.length !== 0 ? (
        <div className=" container mx-auto  pb-24">
          <section className=" grid  cursor-pointer space-y-2 justify-items-center  place-items-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogs?.map((blog) => {
              return (
                <Link to={`/blog/detail/${blog._id}`} key={blog._id}>
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
  );
}

export default Blog;
