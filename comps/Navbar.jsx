import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import styles from './Navbar.module.scss'
import Sidebar from "./Sidebar";
import { useContext, useEffect } from "react";
import { UC } from '../context/UC'
import { IsLoggedIn } from "./IsLoggedIn";

export const Navbar = () => {

  const {dispatch,sidebar} = useContext(UC)
     
  useEffect(()=>{
     // HIDE SCROLBAR
     if (sidebar === true) {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    } else document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  },[sidebar])

  return (
    <div className={styles.NavbarMain}>
      
      {/* <div className=" flex justify-start col-start-1 col-end-3"> */}
      <div className={styles.gridIsLoggedIn}>
      <IsLoggedIn />
      </div>

      {/* == NAVBAR LINKS FOR DESKTOP AND TABLETS */}
      <ul className={styles.navLinksUl}>
        <li>
          <Link href='#'>
          <a> Home </a>
          </Link>
        </li>

        <li>
          <Link href='#'>
          <a> Search </a>
          </Link>
        </li>

        <li>
          <Link href='#'>
          <a> Buy </a>
          </Link>
        </li>

        <li>
          <Link href='#'>
          <a> Rent </a>
          </Link>
        </li>
      </ul>

      {/* === HEADER */}
      <div className="flex justify-center">
      <Link href="/">
        <a className=" text-sky-600 text-xl col-start-3 col-end-5 font-extrabold">Real Estate</a>
      </Link>
      </div>


    {/* ==== SIDEBAR/MENU ICON  */}
     <div className="flex justify-end">
     <div className={` transition hover:scale-125 cursor-pointer
      p-2`}
        onClick={() => dispatch({type:"SIDEBAR_TOGGLE"})}
      >
        <FcMenu />
      </div>

     </div>
      {/* === POP-UP MENU  */}
      <Sidebar />
    </div>
  );
};
