import Image from "next/image";
import styles from "./Banner.module.scss";

import houseImg from "../../../assets/images/real3.webp";

const Banner = () => (
  <div className=" w-full relative">
    <div className="block w-full h-[300px] sm:h-[400px] relative items-center justify-center gap-5">
      <Image
        src={houseImg}
        alt="img"
        height="300"
        width="300"
        className={styles.BannerImg}
        unoptimized
        priority
      />
    </div>
  </div>
);

export default Banner;
