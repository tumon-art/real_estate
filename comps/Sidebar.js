import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

import styles from "../styles/Sidebar.module.scss";
import { useContext } from "react";
import { UC } from "../context/UC";
import Link from "next/link";

const Sidebar = () => {

    const {dispatch,sidebar} = useContext(UC)
  return (
 
    <div className={` ${styles.after} ${sidebar ? "block" : "hidden"}
      right-0 top-0 absolute w-40 z-20 bg-white`}
      >
        <ul className="  ring-2 ring-zinc-200">

          <Link href="/" passHref
          >
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2"
            onClick={() => setshowPopup((p) => !p)}>
              <FcHome /> Home
            </a>
          </Link>

          <Link href="/search" passHref
          >
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2"
            onClick={() => setshowPopup((p) => !p)}>
              <BsSearch /> Search
            </a>
          </Link>

          <Link href="/search?purpose=for-sale" passHref
          >
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2"
            onClick={() => setshowPopup((p) => !p)}>
              <FcAbout /> Buy Property
            </a>
          </Link>

          <Link href="/search?purpose=for-rent" passHref
          >
            <a className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2"
            onClick={() => setshowPopup((p) => !p)}>
              <FiKey /> Rent Property
            </a>
          </Link>

        </ul>
    </div>

  )
}
export default Sidebar
