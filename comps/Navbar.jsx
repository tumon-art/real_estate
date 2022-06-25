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
    <div className={`${styles.NavbarMain} font-FiraMono  relative`}>

    {/* ==== SIDEBAR/MENU ICON  */}
    <div className="flex sm:hidden">
      <div className={` transition hover:scale-125 cursor-pointer
      p-2`}
      onClick={() => dispatch({type:"SIDEBAR_TOGGLE"})}
      >
      <svg className=" h-5 w-5 text-white"  
      strokeWidth="1.5" stroke="currentColor">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
      </div>

      </div>


      {/* == NAVBAR LINKS FOR DESKTOP AND TABLETS */}
      <ul className={`${styles.navLinksUl} ` }>
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
      <div className={styles.header}>
        <div className=" flex gap-2">
        <svg className=" h-6 w-6 text-sky-600"
      strokeWidth="2" stroke="skyblue" fill="currentColor">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 21v-13l9 -4l9 4v13" />
      <path d="M13 13h4v8h-10v-6h6" />
      <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
      </svg>
      <Link href="/">
        <a className=" text-white sm:text-sky-600 text-xl col-start-3 col-end-5 font-extrabold">Real Estate</a>
      </Link>
        </div>
      </div>

         <div className={styles.gridIsLoggedIn}>
         <div className="justify-end">
         <IsLoggedIn />
         </div>
         </div>

      {/* === POP-UP MENU  */}
      
      <Sidebar />
    </div>
  );
};
