import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import styles from "../styles/Sidebar.module.scss";
import { useContext } from "react";
import { UC } from "../context/UC";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const Sidebar = () => {
  const { dispatch, sidebar } = useContext(UC);
  return (
    <nav
      className={`${styles.after} ${
        sidebar ? styles.after__block : styles.after__hidden
      }`}
    >
      <div className={styles.sidebarHeader}>
        {/* === CLOSE BUTTON */}
        <CgClose
          className={styles.logo}
          onClick={() => dispatch({ type: "SIDEBAR_TOGGLE" })}
        />
      </div>

      <ul
        className=" bg-sky-200 h-full flex flex-col items-center
                     justify-center"
      >
        <div className="flex flex-col gap-y-20">
          <Link href="/" passHref>
            <a className={styles.a} onClick={() => setshowPopup((p) => !p)}>
              <FcHome /> Home
            </a>
          </Link>

          <Link href="/search" passHref>
            <a className={styles.a} onClick={() => setshowPopup((p) => !p)}>
              <BsSearch /> Search
            </a>
          </Link>

          <Link href="/search?purpose=for-sale" passHref>
            <a className={styles.a} onClick={() => setshowPopup((p) => !p)}>
              <FcAbout /> Buy Property
            </a>
          </Link>

          <Link href="/search?purpose=for-rent" passHref>
            <a className={styles.a} onClick={() => setshowPopup((p) => !p)}>
              <FiKey /> Rent Property
            </a>
          </Link>
        </div>
      </ul>
    </nav>
  );
};
export default Sidebar;
