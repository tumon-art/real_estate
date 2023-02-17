import Image from "next/image";

import houseImg from "../../../assets/images/real3.webp";

const Banner = () => (
  <Image
    src="/real3.webp"
    alt="img"
    height="500"
    width="1200"
    className="object-cover overflow-hidden
       w-full h-[300px] sm:h-[400px] gap-5"
    priority
  />
);

export default Banner;
