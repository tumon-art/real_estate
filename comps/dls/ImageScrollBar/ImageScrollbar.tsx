import Image from "next/image";
import { memo } from "react";
import styles from "./ImageS.module.scss";

const ImageScrollbar = memo(({ photos }: any) => {
  const rightArrow = () => {
    const auto = document.getElementById("auto") as HTMLElement;
    auto.scrollLeft = auto?.scrollLeft + 1400;
  };

  const leftArrow = () => {
    const auto = document.getElementById("auto") as HTMLElement;
    auto.scrollLeft = auto?.scrollLeft - 1400;
  };

  return (
    <div className=" relative">
      {/* === LEFT ARROW */}
      <span
        onClick={() => leftArrow()}
        className={`${styles.text}  hidden sm:flex absolute text-6xl font-bold
      hover:text-sky-200 cursor-pointer  text-white  shadow-2xl
     mt-auto mb-auto  items-center left-2 md:left-10 top-0 bottom-0 `}
      >
        ❰
      </span>

      {/* === RIGHT ARROW */}
      <span
        onClick={() => rightArrow()}
        className={`${styles.text} hidden sm:flex  absolute text-6xl font-bold
       hover:text-sky-200 cursor-pointer  text-white shadow-2xl
       mt-auto mb-auto  items-center right-2 md:right-10 top-0 bottom-0 `}
      >
        ❱
      </span>

      <div
        id="auto"
        className=" scroll sm:border-x-8 sm:border-t-8  border-sky-100 mb-4
        md:rounded-xl overflow-auto scroll-smooth h-[300px] sm:h-[333px] flex"
      >
        {photos.slice(0, 4).map((e: any, i: any) => {
          return (
            <Image
              id={i}
              className=" rounder-xl cursor-grab object-cover"
              key={i}
              width="1400"
              height="200"
              src={e.url}
              alt="img"
              quality={20}
            />
          );
        })}
      </div>
    </div>
  );
});
export default ImageScrollbar;
