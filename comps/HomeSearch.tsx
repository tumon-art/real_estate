import Link from "next/link";
import { MdFavorite, MdHomeWork, MdLocationOn, MdSearch } from "react-icons/md";

const HomeSearch = () => {
  return (
    <section>
      <div className=" mt-5 flex flex-col items-center">
        <h2
          className=" text-xl font-OpenSans tracking-wider 
      font-semibold text-gray-900"
        >
          Check out a neighborhood
        </h2>

        <div
          className=" flex mt-5 ring-1 ring-sky-200 bg-gray-100 shadow-lg shadow-sky-100 overflow-hidden
          sm:w-[430px] rounded-xl h-12 sm:h-14"
        >
          <input
            type="text"
            placeholder=" Serach for City, Zip..."
            className=" sm:placeholder:text-lg pl-4 w-full bg-transparent"
          />
          <Link
            href="/search"
            className="bg-sky-600 cursor-pointer flex justify-center 
            items-center hover:bg-blue-600 text-white text-3xl px-4"
          >
            <MdSearch />
          </Link>
        </div>
      </div>

      <div
        className=" flex items-center md:text-2xl font-bold 
        mt-20 justify-center text-sky-900"
      >
        discover
        <span className=" mx-1">
          <MdLocationOn className=" text-2xl md:text-4xl text-blue-400 opacity-70" />
        </span>
        a place
        <span className=" mx-1">
          <MdHomeWork className=" text-2xl md:text-4xl text-cyan-600 opacity-70" />
        </span>
        {`you'll love`}
        <span className=" mx-1">
          <MdFavorite className=" text-2xl md:text-4xl text-red-600 opacity-70" />
        </span>
        to live
      </div>
    </section>
  );
};
export default HomeSearch;
