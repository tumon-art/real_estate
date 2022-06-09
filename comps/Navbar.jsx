import Link from "next/link";
import { FcMenu, FcHome, FcCollapse, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { useState } from "react";
import styles from '../styles/Menu.module.css'

export const Navbar = () => {

    const [showPopup,setshowPopup] = useState(false)

  return (
    <div className=" relative px-2 md:mx-10 flex justify-between mt-2">
      <Link href="/">
        <a className=" text-sky-600 text-2xl font-extrabold">Real Estate</a>
      </Link>

      <div className={`  transition
      p-2 flex items-center justify-center z-30`}
      onClick={()=> setshowPopup(p => !p) }>
          { showPopup ? <FcCollapse/> : <FcMenu />}
      </div>

      <div className={` ${styles.after} ${showPopup ? "block" : "hidden"}
      right-0 top-0 absolute w-40 z-20 bg-white`}>
          <ul className="  ring-2 ring-zinc-200">
              <li className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
                 <FcHome  /> <Link href='/'> Home </Link>
              </li>

              <li className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
                <BsSearch /> <Link href='/'> Search </Link>
              </li>

              <li className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
                  <FcAbout /> <Link href='/'> Buy Property </Link>
              </li>

              <li className=" hover:bg-slate-100 flex items-center px-2 py-1 cursor-pointer gap-2">
                  <FiKey /> <Link href='/'> Rent Property </Link>
              </li>
          </ul>
      </div>

    </div>
  )
}