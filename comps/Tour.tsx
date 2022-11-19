import { useEffect, useState } from "react";
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
];

const textProp = `If you'd like to tour this home without leaving
your room, select the video chat tour type and discuss
available options with the agent you are connected with.`;

export default function Tour({ days }: { days: DaysTypes[] }) {
  const [inPerson, setInPerson] = useState<boolean>(true);
  const [inVideo, setInVideo] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<DaysTypes>();

  useEffect(() => {
    let marker = document.getElementById("marker");
    let list: HTMLLIElement[] | any = document.querySelectorAll("ol li");
    marker!.style.left = list[0].offsetLeft + "px";
    marker!.style.width = list[0].offsetWidth + "px";

    function moveIndicator(e: HTMLLIElement) {
      marker!.style.left = e.offsetLeft + "px";
      marker!.style.width = e.offsetWidth + "px";
    }
    list.forEach((each: HTMLLIElement) => {
      each.addEventListener("click", (e: HTMLLIElement | any) => {
        console.log('click')
        moveIndicator(e.target)
      }
      );

      // SOTRE date
      setSelectedDay(days[1])
    });

    window.addEventListener("resize", () => {
      console.log('window')
      marker!.style.left = list[0].offsetLeft + "px";
      marker!.style.width = list[0].offsetWidth + "px";
    });
  }, []);

  return (
    <div className="md:w-2/4 w-full">
      <h3 className=" font-bold ">Schedule A Tour</h3>
      <div className=" flex gap-2 items-center text-gray-400">
        <span> Tour Type</span>
        <QuestionMark
          styles="h-5 text-gray-600 cursor-pointer"
          text={textProp}
        />
      </div>
      <ol
        className=" my-4 relative w-full text-zinc-600
      bg-gray-100 py-2 font-bold isolate "
      >
        <li
          onClick={() => {
            setInPerson(true);
            setInVideo(false);
          }}
          className=" px-5 w-1/2 text-center inline-block cursor-pointer"
        >
          In-Person
        </li>
        <li
          onClick={() => {
            setInPerson(false);
            setInVideo(true);
          }}
          className=" px-5 w-1/2 text-center inline-block cursor-pointer"
        >
          Video Chat
        </li>
        <div
          id="marker"
          className="left-0 transition-all duration-500
        z-[-1] absolute top-0 h-full w-72 bg-sky-200 "
        ></div>
      </ol>

      <div className="text-zinc-600 flex gap-2 overflow-x-auto">
        {days.map((each, i) => {
          if (typeof selectedDay == 'undefined') return null
          return (
            <div
              onClick={() => setSelectedDay(each)}
              className={`px-5 py-2 flex flex-col items-center
            justify-center border-2 cursor-pointer
            ${each.date == selectedDay?.date && 'border-sky-300'}
            hover:bg-zinc-200 transition`}>
              <div> {each.day}  </div>
              <div className="font-bold"> {each.date}  </div>
              <div> {each.month}  </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}
