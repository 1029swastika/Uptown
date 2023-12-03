const url = "https://jobholic.onrender.com/";

function HappyClient({ client }) {
  const { message, image, username } = client;
  return (
    <>
      <div className="  justify-between h-64   w-full sm:w-full md:w-56 lg:w-72 flex flex-col gap-6 p-4 shadow-md text-start">
        <p className=" text-ellipsis  text-textOne md:text-sm lg:text-lg">
          {message}
        </p>
        <div className=" flex items-center gap-4">
          <img
            className=" object-cover object-top  w-10 h-10 lg:w-20 md:w-10 md:h-10 lg:h-20 rounded-full"
            src={url + image}
          />
          <div className=" flex flex-col">
            <span className="  md:text-base lg:text-lg font-medium">
              {username}
            </span>
            <span className=" md:text-xs lg:text-sm text-textThree">
              Marketing Manager
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default HappyClient;
