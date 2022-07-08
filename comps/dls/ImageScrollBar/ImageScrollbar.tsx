import Image from "next/image";
import { useState } from "react";

const ImageScrollbar = ({ photos }: any) => {

  const [index,setindex] = useState(0)
  const rightArrow = () => {
    const auto = document.getElementById('auto') as HTMLElement
    // auto.scrollLeft= auto?.scrollLeft + (1400/4)
    console.log(auto?.scrollBy)
  };

  const leftArrow = () => {
    const auto = document.getElementById('auto') as HTMLElement
    auto.scrollLeft= auto?.scrollLeft - (1400/4)
    console.log(auto?.scrollBy)
  };

  return (

    <div className=" relative">
      <span onClick={()=> leftArrow()}
      className=" absolute text-2xl font-extrabold text-white bg-black
       mt-auto mb-auto h-10 flex items-center left-10 top-0 bottom-0 ">
      Left
      </span>

      <a onClick={()=>rightArrow()} href={'1'}
       className=" absolute text-2xl font-extrabold text-white bg-black
       mt-auto mb-auto h-10 flex items-center right-10 top-0 bottom-0 ">
      Right
      </a>
    <div id='auto'
    className="overflow-auto scroll-smooth h-[333px] ring-4 flex">
      {photos.slice(0,4).map((e: any, i: any) => {
        return (
              <img id={i}
              className=" cursor-grab object-cover ring-8 ring-white"
              key={i}
              width='1400'
              height='200'
              src={e.url}
              quality={4}
              alt="img"
            />

        );
      })}
    </div>
    </div>
  );
};
export default ImageScrollbar;
