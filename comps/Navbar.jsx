import Link from "next/link";
import { FcMenu, FcHome, FcCollapse, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { useState } from "react";
import styles from "../styles/Menu.module.css";

export const Navbar = () => {
  const [showPopup, setshowPopup] = useState(false);

  return (
    <div className=" relative px-2 md:mx-10 flex justify-between mt-2">
      <Link href="/">
        <a className=" text-sky-600 text-2xl font-extrabold">Real Estate</a>
      </Link>

      <div className={`  transition
      p-2 flex items-center justify-center z-30`}
        onClick={() => setshowPopup((p) => !p)}
      >
        {showPopup ? <FcCollapse /> : <FcMenu />}
      </div>

      {/* === POP-UP MENU  */}
      <div className={` ${styles.after} ${showPopup ? "block" : "hidden"}
      right-0 top-0 absolute w-40 z-20 bg-white`}
      >
        <ul className="  ring-2 ring-zinc-200">

          <Link href="/" passHref>
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
              <FcHome /> Home
            </a>
          </Link>

          <Link href="/search" passHref>
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
              <BsSearch /> Search
            </a>
          </Link>

          <Link href="/search?purpose=for-sale" passHref>
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
              <FcAbout /> Buy Property
            </a>
          </Link>

          <Link href="/search?purpose=for-rent" passHref>
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
              <FiKey /> Rent Property
            </a>
          </Link>

        </ul>
      </div>
    </div>
  );
};
