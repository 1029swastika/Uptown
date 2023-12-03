import { MdOutlineMessage } from "react-icons/md";
const url = "http://localhost:8000/";

function RecentSmallBlog({ blog }) {
  const { image, title, description, blogDate } = blog;

  return (
    <div className="flex gap-4">
      <img className=" w-20 h-20 object-cover" src={url + image} />
      <div className=" flex flex-col w-64 gap-2 max-h-96">
        <div className=" text-sm text-textThree">
          <div>
            <h2 className="  text-small font-thin text-black hover:text-myPink cursor-pointer">
              {title}
            </h2>
          </div>
          <div className=" flex gap-4 items-center">
            <div className=" inline-block ">
              <span className=" text-xs">{blogDate}</span>
            </div>
            <div className=" inline-block">
              <span className=" text-xs">ADMIN</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1">
              <MdOutlineMessage className=" text-xs" />
              <span className="text-xs inline-block">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentSmallBlog;
