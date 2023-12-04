import { Parallax } from "react-parallax";
import bgImg from "../assets/bgImg.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RecentSmallBlog from "../components/RecentSmallBlog";
import CommentBox from "../components/CommentBox";
import { ToastContainer, toast } from "react-toastify";

const url = "https://uptown-mjbn.onrender.com/";

function BlogDetail() {
  const [blogDetail, setBlogDetail] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState({});
  const [input, setInput] = useState("");
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axios
      .get("https://uptown-mjbn.onrender.com/api/count/blog")
      .then((data) => setCount(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(count);
  useEffect(() => {
    axios
      .get("https://uptown-mjbn.onrender.com/api/recent/blog")
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(blogs);

  useEffect(() => {
    axios
      .get(`https://uptown-mjbn.onrender.com/api/blog/${params.id}`)
      .then((data) => setBlogDetail(data.data));
  }, [params.id]);
  // console.log(blogDetail);
  const { title, image, description, reviews, category, _id } = blogDetail;

  function handleSubmit() {
    navigate(`/blog?search=${input}`);
  }
  // console.log(comment);
  function handleComment(e) {
    e.preventDefault();
    console.log("yeta pugyo?????");
    axios
      .put(
        `https://uptown-mjbn.onrender.com/api/blog/review/${_id}`,
        {
          comment: comment,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setBlogDetail(res.data);
        console.log("hello dost");

        toast("Commented");
      })
      .catch((Err) => console.log(Err));
  }

  function handleReply() {
    setOpen(true);
  }

  function handleReplyComment(cmtId, e) {
    e.preventDefault();
    axios
      .put(
        `https://uptown-mjbn.onrender.com/api/blog/reply/${_id}`,
        {
          commentId: cmtId,
          comment: reply,
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setBlogDetail(res.data);
        console.log("hello dost");
        setOpen(false);

        toast("Replied");
      })
      .catch((Err) => console.log(Err));
  }

  return (
    <div>
      <ToastContainer />
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
                <h1 className="  text-5xl font-semibold">Blog Details</h1>
                <p className=" text-textOne inline-block">
                  <Link className="  hover:text-myPink " to={"/"}>
                    HOME &gt;
                  </Link>
                  <Link className="  hover:text-myPink " to={"/blog"}>
                    BLOGS &gt;
                  </Link>{" "}
                  <p className=" inline-block"> DETAILS &gt;</p>
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <div className=" flex    items-center justify-center mb-12">
        <div className="flex items-center gap-2  text-center">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-3xl text-center font-semibold   text-myPink">
            BLOG DETAILS
          </h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
      </div>
      <section className=" pb-24 container mx-auto  justify-items-center md:px-8 lg:px-12">
        <div className=" flex flex-col-reverse md:flex-row container mx-auto">
          <div className=" p-8">
            <form
              onSubmit={() => handleSubmit()}
              className=" flex p-2 items-center  border-[#f8f9fa] border-[1rem] text-xs w-full mb-12"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="  p-2 grow  outline-none"
                placeholder="Type a keyword and hit enter"
              />
              <CiSearch className=" cursor-pointer grow-0 text-xl" />
            </form>
            <div>
              <h2 className=" text-lg text-textOne">Categories</h2>
              <ul className=" flex flex-col gap-2 ">
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=jobs`}
                    className=" text-textThree text-sm"
                  >
                    Jobs
                  </Link>
                  <span className=" text-gray-300">({count.jobs})</span>
                </li>
                <hr className=" h-[0.5px] w-full bg-textThree" />
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=visual_assistant`}
                    className=" text-textThree text-sm"
                  >
                    Visual Assistant
                  </Link>
                  <span className=" text-gray-300">
                    ({count.visual_assistant})
                  </span>
                </li>
                <hr className=" h-[0.5px] w-full bg-textThree" />
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=coffee`}
                    className=" text-textThree text-sm"
                  >
                    Coffee
                  </Link>
                  <span className=" text-gray-300">({count.coffee})</span>
                </li>
                <hr className=" h-[0.5px] w-full bg-textThree" />
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=drinks`}
                    className=" text-textThree text-sm"
                  >
                    Drinks
                  </Link>
                  <span className=" text-gray-300">({count.drinks})</span>
                </li>
                <hr className=" h-[0.5px] w-full bg-textThree" />
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=foods`}
                    className=" text-textThree text-sm"
                  >
                    Foods
                  </Link>
                  <span className=" text-gray-300">({count.foods})</span>
                </li>
                <hr className=" h-[1px] w-full bg-textThree" />
                <li className="flex justify-between">
                  <Link
                    to={`/blog?category=travel`}
                    className=" text-textThree text-sm"
                  >
                    Travel
                  </Link>
                  <span className=" text-gray-300">({count.travel})</span>
                </li>
                <hr className=" h-[0.5px] w-full bg-textThree" />
              </ul>
            </div>
            <div className=" mt-8">
              <h2 className=" text-textOne mb-4 ">Recent Blog</h2>
              <div className=" flex flex-col gap-4">
                {blogs?.map((blog) => {
                  return (
                    <Link to={`/blog/detail/${blog._id}`} key={blog._id}>
                      <RecentSmallBlog blog={blog} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <h2 className=" text-textTwo text-2xl  leading-loose ">
                {title}
              </h2>
              <p className=" text-textOne font-light  leading-8  text-sm">
                {description}
              </p>
            </div>
            <div>
              <img className=" my-4 drop-shadow-lg" src={url + image} />
            </div>
            <div className=" mt-12 ">
              <div className=" py-10">
                <h2 className=" text-xl mb-4 text-textThree font-extralight">
                  {reviews?.length} Comments
                </h2>
                <div>
                  {reviews?.map((cmt) => {
                    return (
                      <div className=" mt-4  " key={cmt.created_by}>
                        <div className="flex flex-col">
                          <CommentBox cmt={cmt} />
                          {open === false ? (
                            <div className=" ml-16 mt-4">
                              <button
                                onClick={() => handleReply()}
                                className=" py-1 px-4 bg-gray-200 text-xs font-mono rounded-md"
                              >
                                Reply
                              </button>
                            </div>
                          ) : null}
                        </div>
                        {open === false &&
                          cmt.replies?.map((reply) => {
                            return (
                              <div className=" ml-8 mt-4" key={reply._id}>
                                <CommentBox cmt={reply} />
                              </div>
                            );
                          })}
                        {open === true ? (
                          <div className=" mt-4">
                            <form
                              onSubmit={(e) => handleReplyComment(cmt._id, e)}
                              className=" bg-gray-100 p-8"
                            >
                              <textarea
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                placeholder="your reply here"
                                className=" outline-none h-32 w-full p-1"
                              />
                              <button className=" text-gray-50 mt-2 bg-myPink px-4 py-1 rounded-md">
                                Reply
                              </button>
                            </form>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
              <form
                onSubmit={(e) => handleComment(e)}
                className=" p-14 bg-[#f8f9fa] "
              >
                <div className=" flex flex-col gap-4">
                  <h2 className=" text-xl font-light text-textOne ">
                    Leave a comment
                  </h2>

                  <div>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      className=" outline-none border w-full  h-36 md:h-28"
                    />
                  </div>
                </div>
                <button className=" p-2 md:p-4 rounded-md mt-4 text-white  bg-myPink ">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
