import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
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

export default function Tour() {
  let days: DaysTypes[] = [];
  const [inPerson, setInPerson] = useState<boolean>(true);
  const [inVideo, setInVideo] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<DaysTypes>(days[1]);
  const [selectedTime, setSelectedTime] = useState<string>(times[0]);

  for (let i = 1; i <= 7; i++) {
    const str = moment().clone().add(i, "days").format("dd D MMM").split(" ");
    const obj = { day: str[0], date: str[1], month: str[2] };
    days.push(obj);
  }

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
    <form className=" w-full">
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
          className="left-0 transition-all
        z-[-1] absolute top-0 h-full w-1/2 bg-sky-200 "
        ></div>
      </ol>
      {/* SELECT DATE */}
      {/* HYDRATION PROBLEM */}
      <section className=" flex justify-center">
        <div className="text-zinc-600 pb-2 flex gap-2 overflow-auto">
          {days.map((each: DaysTypes, i) => {
            return (
              <div
                key={i}
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
      <div>
        <fieldset className=" w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5">
          <legend className=" px-1 text-xs font-bold">Time</legend>
          <select
            className=" outline-none w-full
           font-bold text-zinc-600 bg-transparent"
            defaultValue=""
            onChange={(e) => selectHandle(e)}
          >
            {times.map((each: string) => {
              return <option value={each}> {each} </option>;
            })}
          </select>
        </fieldset>
      </div>
      {/* PHONE, EMAIL */}
      <fieldset className=" w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5">
        <legend className=" px-1 text-xs font-bold">Phone</legend>
        <input
          className=" text-gray-700 text-sm w-full placeholder:text-gray-500
           placeholder:text-xs outline-none px-5"
          placeholder="Phone"
        />
      </fieldset>
      <fieldset className=" w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5">
        <legend className=" px-1 text-xs font-bold">Email</legend>
        <input
          className=" text-gray-700 text-sm w-full placeholder:text-gray-500
           placeholder:text-xs outline-none px-5"
          placeholder="Email"
        />
      </fieldset>

      {/* CHECKBOX */}
      <label>
        <input type="checkbox" />
        <span className=" ml-2 text-xs text-gray-500">
          I want to talk about financing
        </span>
      </label>

      <div
        className=" text-white font-extrabold cursor-pointer
       rounded-md hover:bg-sky-500 h-10 my-5 bg-sky-600 flex justify-center items-center "
      >
        Schedule A Tour
      </div>
    </form>
  );
}
