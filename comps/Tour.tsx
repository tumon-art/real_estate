import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
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
  const [selectedDay, setSelectedDay] = useState<DaysTypes>(days[1]);
  const [selectedTime, setSelectedTime] = useState<string>(times[0]);

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
        moveIndicator(e.target);
      });
    });

    window.addEventListener("resize", () => {
      marker!.style.left = list[0].offsetLeft + "px";
      marker!.style.width = list[0].offsetWidth + "px";
    });
  }, []);

  // SELECT HANDLE
  const selectHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTime(value);
  };

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
        className=" rounded-sm my-4 relative w-full text-zinc-600
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
      {/* SELECT DATE */}
      {/* HYDRATION PROBLEM */}
      <section className=" flex justify-center">
        <div className="text-zinc-600 flex gap-2 overflow-auto">
          {days.map((each: DaysTypes) => {
            return (
              <div
                onClick={() => setSelectedDay(each)}
                className={` rounded-sm px-5 py-2 flex flex-col items-center
            justify-center border-2 cursor-pointer
            ${each.date == selectedDay?.date && "border-sky-300"}
            hover:bg-zinc-200 transition`}
              >
                <div> {each.day} </div>
                <div className="font-bold"> {each.date} </div>
                <div> {each.month} </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* SELECT TIME */}
      <div className=" w-full rounded-sm ring-2 ring-sky-200 py-2 px-1 my-5">
        <h3 className="font-medium">Time</h3>
        <select
          className=" outline-none focus:ring-1 w-full
           font-bold text-zinc-600 bg-transparent"
          defaultValue=""
          onChange={(e) => selectHandle(e)}
        >
          {times.map((each: string) => {
            return <option value={each}> {each} </option>;
          })}
        </select>
      </div>
    </div>
  );
}
