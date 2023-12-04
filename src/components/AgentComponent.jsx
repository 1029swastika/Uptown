const url = "https://uptown-mjbn.onrender.com/";
function AgentComponent({ img, name, company, total_sales }) {
  return (
    <div>
      <div className=" group relative h-[340px] hover:overflow-hidden  cursor-pointer ">
        <div className=" w-56  overflow-hidden">
          <img
            className=" scale-100  object-cover group-hover:scale-110 group-hover:overflow-hidden ease-in-out transition duration-500  "
            src={url + img}
          />
        </div>
        <div className=" absolute bottom-0 bg-white left-8">
          <div className="  p-5 flex flex-col gap-2 text-start text-textThree shadow-sm relative  ">
            <h2 className="  text-textTwo text-lg">{name}</h2>

            <p>{company}</p>
            <p className=" text-textThree text-base  flex gap-1 items-center">
              Total Sales <hr className=" w-4 h-[1.5px]  bg-textThree" />{" "}
              {total_sales}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentComponent;
