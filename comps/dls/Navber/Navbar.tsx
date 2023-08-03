"use client";
import Link from "next/link";
import Sidebar from "../../Sidebar";
import { memo, useEffect } from "react";
import { IsLoggedIn } from "../../IsLoggedIn";
import Fav from "../../Fav";
import Btn from "../Btn/Btn";
import { MdSearch } from "react-icons/md";
import useMainStore from "../../../context/mainStore";

const Navbar = () => {
  const sidebar = useMainStore((state) => state.sidebar);

  const setSideBar = useMainStore((state) => state.setSideBar);

  useEffect(() => {
    // HIDE SCROLBAR
    var body = document.getElementsByTagName(
      "BODY"
    ) as HTMLCollectionOf<HTMLElement>;
    if (sidebar === true) {
      body[0].style.overflow = "hidden";
    } else body[0].style.overflow = "auto";
  }, [sidebar]);

  return (
    <div
      className={` flex relative z-50 m-0 w-full justify-between
     bg-white sm:h-[60px] font-FiraMono items-center`}
      id="navbar"
    >
      {/* === HEADER */}

      <div className=" flex gap-2 ml-2 items-center">
        <svg
          className=" h-6 w-6 inline-block text-sky-600"
          strokeWidth="2"
          stroke="skyblue"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21v-13l9 -4l9 4v13" />
          <path d="M13 13h4v8h-10v-6h6" />
          <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
        </svg>
        <Link
          href="/"
          className="text-sky-600 font-OpenSans pt-[1px] text-xl col-start-3 col-end-5 font-extrabold"
        >
          Real Estate
        </Link>
      </div>

      {/* -- SEARCH */}
      <div
        className=" hidden md:flex bg-gray-100 overflow-hidden
      w-[230px] md:w-[290px] rounded-md h-8 sm:h-8"
      >
        <input
          type="text"
          placeholder="City, Zip..."
          className=" sm:placeholder:text-xs pl-4 w-full bg-transparent"
        />
        <Link
          href="/search"
          className=" flex items-center bg-sky-400 cursor-pointer hover:bg-blue-600 text-white text-xl px-4"
        >
          <MdSearch />
        </Link>
      </div>

      {/* == NAVBAR LINKS FOR DESKTOP AND TABLETS */}
      <ul
        className={` bg-slate-100 rounded-md hidden sm:flex justify-center items-center`}
      >
        <li>
          <Link href="/">
            <Btn text={"Home"} />
          </Link>
        </li>

        <li>
          <Link href="/search">
            <Btn text={"Search"} />
          </Link>
        </li>

        <li>
          <Link href="/search?purpose=for-sale">
            <Btn text={"Buy"} />
          </Link>
        </li>

        <li>
          <Link href="/search?purpose=for-rent">
            <Btn text={"Rent"} />
          </Link>
        </li>
      </ul>

      <div
        className={`text-white gap-1 sm:flex justify-center items-center hidden`}
      >
        <Fav />
        <IsLoggedIn />
      </div>

      {/* ==== SIDEBAR/MENU ICON  */}
      <div className="flex w-32 h-8 sm:h-10 bg-sky-400 sm:hidden relative">
        {/* === CLIP PATH */}
        <div className="navClip h-full"> </div>

        <div
          className={` transition cursor-pointer p-2 
        flex justify-center items-center`}
          // onClick={setSideBar}
        >
          <svg
            className=" h-5 w-5 text-white"
            strokeWidth="3"
            stroke="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>
      {/* === POP-UP MENU  */}

      <Sidebar />
    </div>
  );
};

export default memo(Navbar);
