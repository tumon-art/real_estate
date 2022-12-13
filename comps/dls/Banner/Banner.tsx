import Image from "next/image";

import houseImg from "../../../assets/images/real3.webp";

const Banner = () => (
  <div className=" w-full">
    <Image
      src={houseImg}
      alt="img"
      height="400"
      width="1200"
      className="object-cover overflow-hidden
       w-full h-[300px] sm:h-[400px] gap-5"
      priority
    />
  </div>
);

export default Banner;
