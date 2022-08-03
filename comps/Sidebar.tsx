import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import styles from "../styles/Sidebar.module.scss";
import { useContext } from "react";
import { UC } from "../context/UC";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import BottomSvg from "./BottomSvg";

const Sidebar = () => {
  const { dispatch, sidebar } = useContext(UC);

  return (
    <nav
      className={`${styles.after} ${
        sidebar ? styles.after__block : styles.after__hidden
      } grid`}
    >
      <div className={styles.sidebarHeader}>
        {/* === CLOSE BUTTON */}
        <CgClose
          className={styles.logo}
          onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
        />
      </div>
      <ul className={` ${styles.ul} `}>
        <Link href="/" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <FcHome /> Home
          </a>
        </Link>

        <Link href="/search" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <BsSearch /> Search
          </a>
        </Link>

        <Link href="/search?purpose=for-sale" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <FcAbout /> Buy Property
          </a>
        </Link>

        <Link href="/search?purpose=for-rent" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <FiKey /> Rent Property
          </a>
        </Link>
      </ul>

      <div className=" self-end text-black text-center">
        © 2022 Real Estate, Inc.
      </div>
      <BottomSvg Sidebar />
    </nav>
  );
};
export default Sidebar;
