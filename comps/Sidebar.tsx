import styles from "../styles/Sidebar.module.scss";
import Link from "next/link";
import BottomSvg from "./BottomSvg";
import {
  MdClose,
  MdHome,
  MdOutlineInfo,
  MdSearch,
  MdVpnKey,
} from "react-icons/md";
import useMainStore from "../context/mainStore";

const Sidebar = () => {
  const sidebar = useMainStore((state) => state.sidebar);
  const setSideBar = useMainStore((state) => state.setSideBar);

  return (
    <nav
      className={`${styles.after} ${
        sidebar ? styles.after__block : styles.after__hidden
      } grid`}
    >
      <div className={styles.sidebarHeader}>
        {/* === CLOSE BUTTON */}
        <MdClose className={styles.logo} onClick={setSideBar} />
      </div>
      <ul className={` ${styles.ul} `}>
        <Link href="/" passHref>
          <div className={styles.a} onClick={setSideBar}>
            <MdHome /> Home
          </div>
        </Link>

        <Link href="/search" passHref>
          <div className={styles.a} onClick={setSideBar}>
            <MdSearch /> Search
          </div>
        </Link>

        <Link href="/search?purpose=for-sale" passHref>
          <div className={styles.a} onClick={setSideBar}>
            <MdOutlineInfo /> Buy Property
          </div>
        </Link>

        <Link href="/search?purpose=for-rent" passHref>
          <div className={styles.a} onClick={setSideBar}>
            <MdVpnKey /> Rent Property
          </div>
        </Link>
      </ul>

      <div className=" self-end text-black text-center">
        © 2023 Real Estate, Inc.
      </div>
      <BottomSvg Sidebar />
    </nav>
  );
};
export default Sidebar;
