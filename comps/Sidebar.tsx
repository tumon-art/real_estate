import styles from "../styles/Sidebar.module.scss";
import { useContext } from "react";
import { UC } from "../context/UC";
import Link from "next/link";
import BottomSvg from "./BottomSvg";
import {
  MdClose,
  MdHome,
  MdOutlineInfo,
  MdSearch,
  MdVpnKey,
} from "react-icons/md";

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
        <MdClose
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
            <MdHome /> Home
          </a>
        </Link>

        <Link href="/search" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <MdSearch /> Search
          </a>
        </Link>

        <Link href="/search?purpose=for-sale" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <MdOutlineInfo /> Buy Property
          </a>
        </Link>

        <Link href="/search?purpose=for-rent" passHref>
          <a
            className={styles.a}
            onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
          >
            <MdVpnKey /> Rent Property
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
