import { useState } from "react";
import { MdChatBubble } from "react-icons/md";


export default function Chat() {

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className=" z-10 shadow-xl flex justify-center
    items-center text-white right-1 sm:right-5 bottom-5 fixed">
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="cursor-pointer w-12 h-12 bg-sky-400 flex
        justify-center items-center rounded-full hover:bg-sky-600 py-2 px-2 "
      >
        <MdChatBubble />
      </div>


      <div className={` ${isHovering == false && 'opacity-0'}
      transition-opacity hover:bg-sky-600 shadow-xl
      duration-500
      bg-sky-400 absolute left-[-250%] px-3 py-1 rounded-3xl
      flex items-center justify-center `}>
        Talk Now!
      </div>

    </div>
  )
}
