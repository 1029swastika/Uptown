import { MdOutlineMessage } from "react-icons/md";
const url = "https://jobholic.onrender.com/";

function BlogComponent({ blog }) {
  const { image, title, description, blogDate } = blog;

  return (
    <div>
      <div className=" flex flex-col w-64 gap-2 max-h-96">
        <div className=" text-sm text-textThree">
          <div>
            <h2 className=" text-lg text-black">{title}</h2>
          </div>
          <div className=" flex gap-4">
            <div className=" inline-block ">
              <span>{blogDate}</span>
            </div>
            <div className=" inline-block">
              <span>ADMIN</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMessage />
              <span className=" inline-block">3</span>
            </div>
          </div>
        </div>
        <img className=" w-64 object-cover" src={url + image} />
        <p className=" text-textThree text-base   truncate ">{description}</p>
      </div>
    </div>
  );
}

export default BlogComponent;
