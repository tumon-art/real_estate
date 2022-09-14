import { MdSearch } from "react-icons/md";

const HomeSearch = () => {
  return (
    <div className=" flex flex-col items-center">
      <h2
        className=" text-xl font-OpenSans tracking-wider 
      font-semibold text-gray-900"
      >
        Check out a neighborhood
      </h2>

      <div
        className=" flex mt-5 bg-gray-200 overflow-hidden
       w-[430px] rounded-xl h-14"
      >
        <input type="text" className=" w-full bg-transparent" />
        <button className=" bg-sky-600 text-white text-3xl px-4">
          {" "}
          <MdSearch />{" "}
        </button>
      </div>
    </div>
  );
};
export default HomeSearch;
