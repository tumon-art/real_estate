import Link from "next/link";
import { FcMenu } from "react-icons/fc";


import { CgClose } from 'react-icons/cg'
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { UC } from '../context/UC'

export const Navbar = () => {

  const {dispatch,sidebar} = useContext(UC)
  console.log(dispatch,sidebar)
  return (
    <div className=" relative px-2 md:mx-10 flex justify-between my-2">

      <Link href="/">
        <a className=" text-sky-600 text-2xl font-extrabold">Real Estate</a>
      </Link>

      {/* ======= */}
     <div className="flex items-center gap-5">

      {/* === FAV  */}
      <div>
      <svg className={` transition duration-300 right-4 bottom-[100px]  
        text-gray-900 absolute h-10 w-10 `} 
        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M4.318 6.318a4.5 
        4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
        7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>

      </div>

     <div className={` transition hover:scale-125 cursor-pointer
      p-2 flex items-center justify-center z-30`}
        onClick={() => dispatch({type:"SIDEBAR_TOGGLE"})}
      >
        {sidebar ? <CgClose /> : <FcMenu  />}
      </div>

     </div>
      {/* === POP-UP MENU  */}
      <Sidebar />

    </div>
  );
};
