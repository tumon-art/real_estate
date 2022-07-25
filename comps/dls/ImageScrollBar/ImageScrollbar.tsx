import { useState } from "react";
import styles from './ImageS.module.scss'

const ImageScrollbar = ({ photos }: any) => {

  const [index,setindex] = useState(0)
  const rightArrow = () => {
    const auto = document.getElementById('auto') as HTMLElement
    auto.scrollLeft= auto?.scrollLeft + (1400/4)
    console.log(auto?.scrollBy)
  };

  const leftArrow = () => {
    const auto = document.getElementById('auto') as HTMLElement
    auto.scrollLeft= auto?.scrollLeft - (1400/4)
    console.log(auto?.scrollBy)
  };

  return (

    <div className=" relative">

      {/* === LEFT ARROW */}
      <span onClick={()=> leftArrow()}
      className={`${styles.text} absolute text-6xl font-bold
      hover:text-sky-200 cursor-pointer  text-white  shadow-2xl
     mt-auto mb-auto flex items-center left-10 top-0 bottom-0 `}>
        ❰
      </span>

      {/* === RIGHT ARROW */}
      <span onClick={()=>rightArrow()}
       className={`${styles.text}  absolute text-6xl font-bold
       hover:text-sky-200 cursor-pointer  text-white shadow-2xl
       mt-auto mb-auto flex items-center right-10 top-0 bottom-0 `}>
        ❱
      </span>

    <div id='auto'
    className=" ring-8 ring-sky-100 my-4 rounded-xl overflow-auto scroll-smooth h-[333px] flex">
      {photos.slice(0,4).map((e: any, i: any) => {
        return (
              <img id={i}
              loading='lazy'
              className="cursor-grab object-cover"
              key={i}
              width='1400'
              height='200'
              src={e.url}
              alt="img"
            />

        );
      })}
      
    </div>
    </div>
  );
};
export default ImageScrollbar;
