import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import styles from "../styles/Sidebar.module.scss";
import { useContext } from "react";
import { UC } from "../context/UC";
import Link from "next/link";
import { CgClose } from 'react-icons/cg'

const Sidebar = () => {
 
  const { dispatch, sidebar } = useContext(UC)
  return (
      <nav 
      className={`${styles.after} ${sidebar ? styles.after__block : styles.after__hidden}`}
      >
        
      <div className={styles.sidebarHeader}>
      {/* === FAV ICON  */}
      <svg className={styles.svg} 
      viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" strokeWidth={2}>
      <path d="M4.318 6.318a4.5 
      4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
      7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>

      {/* === CLOSE BUTTON */}
      <CgClose className={styles.logo} onClick={()=> dispatch({type:"SIDEBAR_TOGGLE"})} /> 
      
      </div>


      <ul className="">

        <Link href="/" passHref
        >
          <a className={styles.a}
            onClick={() => setshowPopup((p) => !p)}>
            <FcHome /> Home
          </a>
        </Link>

        <Link href="/search" passHref
        >
          <a className={styles.a}
            onClick={() => setshowPopup((p) => !p)}>
            <BsSearch /> Search
          </a>
        </Link>

        <Link href="/search?purpose=for-sale" passHref
        >
          <a className={styles.a}
            onClick={() => setshowPopup((p) => !p)}>
            <FcAbout /> Buy Property
          </a>
        </Link>

        <Link href="/search?purpose=for-rent" passHref
        >
          <a className={styles.a}
            onClick={() => setshowPopup((p) => !p)}>
            <FiKey /> Rent Property
          </a>
        </Link>

      </ul>
     

    </nav>
  )
}
export default Sidebar
