import Image from "next/image";
import { useState } from "react";
import {
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdHomeRepairService,
  MdClose,
} from "react-icons/md";
import AgentAsk from "./AgentAsk";
import Modal from "./dls/modal/Modal";

export interface AgenstData {
  id: number;
  img: string;
  name: string;
  rating: number;
}

let agentsData: AgenstData[] = [
  {
    id: 1,
    img: "/courtney.jpeg",
    name: `Courtney 
      Geissinger`,
    rating: 4.8,
  },
  {
    id: 2,
    img: "/michael.jpeg",
    name: `Micheal 
      Fadeeff`,
    rating: 4.3,
  },
  {
    id: 3,
    img: "/raul.jpeg",
    name: `Roul 
      Alcaraz`,
    rating: 3.3,
  },
  {
    id: 4,
    img: "/francisco.jpeg",
    name: `Francisco 
      Gonzalez`,
    rating: 3.8,
  },
];
const Agents = () => {
  const [isModelOpen, setisModelOpen] = useState<boolean>(false);
  const [agentData, setAgentData] = useState<AgenstData>();

  const getStar = (e: any): any => {
    if (e.rating > 4.4) {
      return (
        <div className=" flex text-sky-600">
          <MdStar className="" />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
      );
    }

    if (e.rating > 4) {
      if (e.rating < 4.4) {
        return (
          <div className="flex text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </div>
        );
      }
    }

    if (e.rating > 3.5) {
      if (e.rating < 3.9) {
        return (
          <div className="flex text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarOutline />
          </div>
        );
      }
    }

    if (e.rating > 3.1) {
      if (e.rating < 3.5) {
        return (
          <div className="flex text-sky-600">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </div>
        );
      }
    }
  };

  return (
    <section className=" flex flex-col min-w-full items-center">
      <h3 className=" text-center text-md font-OpenSans">OJO NETWORK AGENTS</h3>
      <h2 className=" text-center text-2xl font-semibold">
        <span> Agents in </span>
        <span className=" ml-1 text-sky-600">San Francisco</span>
      </h2>

      <div className="flex flex-wrap justify-center overflow-auto py-4 px-4 w-full gap-5">
        {agentsData.map((e: AgenstData) => {
          return (
            <div
              className=" ring-1 ring-zinc-200 flex-col flex justify-center
               bg-zinc-100 min-w-[260px] h-44 rounded-xl"
              key={e.id}
            >
              {/* === IMG AND TEXT HOLD */}
              <div className="flex justify-center gap-x-3 items-center">
                <div>
                  <Image
                    src={e.img}
                    height="100"
                    width="100"
                    alt="img"
                    className=" rounded-full"
                  />
                </div>

                {/* === TEXT,RATE CONTENT */}
                <div className=" grid gap-1">
                  <div className=" tracking-wide text-sky-600 flex items-center gap-2">
                    <MdHomeRepairService />
                    <p className=" text-[0.6rem] text-zinc-600">Pro. Broker</p>
                  </div>
                  <h3
                    className=" tracking-wider leading-5 font-OpenSans text-md
                 font-semibold break-words whitespace-pre-line"
                  >
                    {e.name}
                  </h3>
                  <div className="flex gap-x-1 items-center">
                    <span className=" text-[0.7rem] text-sky-600">
                      {e.rating}/5
                    </span>
                    <span className=" text-xs">{getStar(e)}</span>
                  </div>
                </div>
              </div>
              {/* === ASK */}
              <div className=" flex justify-center items-center mt-2">
                <button
                  onClick={() => {
                    setisModelOpen(true);
                    setAgentData(e);
                  }}
                  className=" bg-sky-500  cursor-pointer hover:bg-sky-900 font-OpenSans font-semibold
                 text-white rounded-2xl px-4 py-1 text-md"
                >
                  Ask a Question
                </button>
              </div>
            </div>
          );
        })}
        {/* === Modal  */}
        <div className=" relative block w-full text-sky-600">
          <Modal isOpen={isModelOpen} setModel={setisModelOpen}>
            {agentData && <AgentAsk agent={agentData} />}
            <MdClose
              onClick={() => setisModelOpen(false)}
              className=" absolute top-10 right-10 cursor-pointer 
              hover:opacity-70 w-8 h-8 font-extrabold"
            />
          </Modal>
        </div>
      </div>
    </section>
  );
};
export default Agents;
