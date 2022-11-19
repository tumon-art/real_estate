import { useEffect } from "react";
import { DaysTypes } from "../pages/property/[id]";
import QuestionMark from "./svg/QuestionMark";

const times: string[] = [
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
]

const textProp = `If you'd like to tour this home without leavign
yours, select the video chat tour type and discuss
available options with the agent you are connected with.`

export default function Tour({ days }: { days: DaysTypes[] }) {

  useEffect(() => {
    let marker = document.getElementById('marker');
    let list: HTMLLIElement[] | any = document.querySelectorAll('ol li');
    marker!.style.left = list[0].offsetLeft + 'px';
    marker!.style.width = list[0].offsetWidth + 'px';

    console.log(list[0])
    function moveIndicator(e: HTMLLIElement) {
      marker!.style.left = e.offsetLeft + 'px';
      marker!.style.width = e.offsetWidth + 'px';
    }
    list.forEach((each: HTMLLIElement) => {
      each.addEventListener('click', (e: HTMLLIElement | any) => moveIndicator(e.target))
    })
  }, [])

  return (
    <div className="md:w-2/4 w-full">
      <h3 className=" font-bold ">Schedule A Tour</h3>
      <div className=" flex gap-2 items-center text-gray-400">
        <span> Tour Type</span>
        <QuestionMark styles="h-5 text-gray-600 cursor-pointer"
          text={textProp}
        />
      </div>
      <ol className=" my-4 relative w-full text-zinc-600
      bg-gray-200 py-2 font-bold isolate ">
        <li className=" px-5 w-1/2 text-center inline-block cursor-pointer">
          In-Person
        </li>
        <li className=" px-5 w-1/2 text-center inline-block cursor-pointer">
          Video Chat
        </li>
        <div id='marker' className="left-0 transition-all duration-1000 z-[-1] absolute top-0 h-full w-72 bg-sky-200 "></div>
      </ol>
    </div>
  )
}
