import { MdSearch } from "react-icons/md";

const HomeSearch = () => {
  return (
    <div className=" mt-5 flex flex-col items-center">
      <h2
        className=" text-xl font-OpenSans tracking-wider 
      font-semibold text-gray-900"
      >
        Check out a neighborhood
      </h2>

      <div
        className=" flex mt-5 bg-gray-200 overflow-hidden
       sm:w-[430px] rounded-xl h-12 sm:h-14"
      >
        <input
          type="text"
          placeholder=" Serach for City, Neighborhood, Zip..."
          className=" sm:placeholder:text-xl pl-4 w-full bg-transparent"
        />
        <button className=" bg-sky-600 text-white text-3xl px-4">
          {" "}
          <MdSearch />{" "}
        </button>
      </div>
    </div>
  );
};
export default HomeSearch;
