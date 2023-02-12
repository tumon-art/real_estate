import {
  MdClose,
  MdGrid4X4,
  MdKingBed,
  MdLocationCity,
  MdOutlineBathtub,
} from "react-icons/md";

import millify from "millify";
import moment from "moment";
import { baseUrl, fetchApi } from "../../utils/fetchData";
import ImageScrollbar from "../../comps/dls/ImageScrollBar/ImageScrollbar";
import Map from "../../comps/Map";
import Tour from "../../comps/Tour";
import Modal from "../../comps/dls/modal/Modal";
import { useState } from "react";
import Req from "../../comps/Req";
import Fav from "../../comps/Fav";
import useDB from "../../comps/dls/useDB";
import Share from "../../comps/Share";
import Chat from "../../comps/Chat";

export interface DaysTypes {
  day: string;
  date: string;
  month: string;
}

var days: DaysTypes[] = [];

for (let i = 1; i <= 7; i++) {
  const str = moment().clone().add(i, "days").format("dd D MMM").split(" ");
  const obj = { day: str[0], date: str[1], month: str[2] };
  days.push(obj);
}

const Searched = ({ property }: any) => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    description,
    photos,
    geography,
    location,
  } = property;
  const [isModelOpen, setisModelOpen] = useState<boolean>(false);
  const [isReqOpen, setisReqOpen] = useState<boolean>(false);
  const [isShareOpen, setisShareOpen] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string>("300px");
  const { addFav } = useDB();

  const [update, setupdate] = useState<number>(0);

  return (
    <div className=" md:px-20 text-sky-700 relative">
      <Chat />
      {photos && <ImageScrollbar photos={photos} />}

      <div className=" md:flex px-2 sm:px-0 justify-between">
        <div className="  md:order-2 sm:mx-0 gap-3">
          <div className="  font-bold">
            AED
            <span className=" ml-2 text-xl text-sky-800 ">
              {millify(Number(price))}
            </span>
            {rentFrequency && ` /${rentFrequency}`}
          </div>
        </div>
        <h1 className=" my-2 text-md sm:text-xl font-bold"> {title}</h1>
      </div>

      {/* === ROOMS AND DETAILS */}
      <div className=" mx-2 sm:mx-0 my-2">
        <div className=" grid sm:grid-cols-2 gap-y-2 grid-rows-2 justify-between ">
          <div className=" flex gap-3 items-center text-cyan-700">
            <b>{rooms}</b>
            <span title="Bed">
              <MdKingBed />
            </span>
            | <b>{baths}</b>
            <span title="Bathtub">
              <MdOutlineBathtub />
            </span>
            |<b>{millify(Number(area))}</b>
            <span title="Area">
              <MdGrid4X4 />
            </span>
          </div>

          {/* --- SHARE/CLIP AND OTHERS  */}
          <div className=" flex sm:justify-end gap-4 ">
            <div
              onClick={() => {
                addFav(property.externalID);
                setupdate((p) => ++p);
              }}
              className={` cursor-pointer  text-white
            items-center flex gap-1 ring-2 px-2 p-[2px] rounded-sm
              ${
                global.localStorage?.fav &&
                JSON.parse(localStorage.fav).filter(
                  (e: any) => e == property.externalID
                ).length >= 1
                  ? " bg-red-500 hover:bg-red-600"
                  : " bg-sky-500 hover:bg-sky-700"
              }
            `}
            >
              <span className=" hidden sm:block text-white">
                <Fav noBorder />
              </span>
              {global.localStorage?.fav &&
              JSON.parse(localStorage.fav).filter(
                (e: any) => e == property.externalID
              ).length >= 1
                ? "Saved"
                : "Save"}
            </div>

            {/* ==== SHARE COMP */}
            <button
              onClick={() => setisShareOpen(true)}
              className=" hover:bg-sky-500 hover:text-white
            ring-2 px-3 p-[2px] rounded-sm"
            >
              Share
            </button>
          </div>

          {/* ==== LOACATION */}
          <div className="row-start-2 flex gap-2 items-center">
            <MdLocationCity className=" h-5 text-zinc-400" />
            <span className=" text-zinc-600 text-xs">
              {location[2].name}, {location[1].name}
            </span>
          </div>
        </div>

        <hr className="mt-5"></hr>

        <section className="lg:flex my-5 gap-8">
          <div className="lg:w-4/6">
            <Map geography={geography} />
            <h4 className="border-b-2 text-xl font-bold font-FiraMono my-5 ">
              Description
            </h4>

            <div className="flex flex-col items-center overflow-hidden">
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className={`divText h-[${divHeight}] pb-8 overflow-hidden relative leading-6 text-zinc-900 whitespace-pre-line`}
              ></div>

              <button
                className=" inline h-10 rounded-md text-sky-700 font-semibold px-3 bg-zinc-200 "
                onClick={() =>
                  setDivHeight(divHeight === "300px" ? "100%" : "300px")
                }
              >
                {divHeight === "300px" ? "Expand" : "Collapse"}
              </button>
            </div>
          </div>
          <nav
            className=" mt-20 pt-2 gap-3 md:pt-0 relative bottom-0 left-0 h-auto md:h-52  md:w-2/6 w-[100vw]
           flex flex-col  md:gap-5 md:my-5 justify-center bg-white items-center"
          >
            <p className=" pb-2 md:pb-0 order-3 md:order-0 text-xs text-zinc-600 text-center font-medium">
              Request a tour as early as
              <span className=" md:block font-bold text-center">
                Today at 11:00AM
              </span>
            </p>
            <div className=" flex justify-evenly w-2/3 md:w-full gap-5 pb-2 sm:pb-0 flex-col">
              <button
                onClick={() => setisModelOpen(true)}
                className=" bg-sky-200 cursor-pointer ring-4 ring-sky-200 hover:text-sky-900
           text-sky-700  text-sm sm:text-lg font-extrabold w-full rounded-sm py-2 "
              >
                Schedule A Tour
              </button>

              <button
                onClick={() => setisReqOpen(true)}
                className=" ring-4 ring-sky-200 rounded-sm py-2 w-full
              cursor-pointer hover:text-sky-900 bg-white
           text-sky-700 text-sm sm:text-lg font-extrabold"
              >
                Request Info
              </button>
            </div>
          </nav>
        </section>

        {/* === Tour */}
        <div className=" block w-full">
          <Modal isOpen={isModelOpen} setModel={setisModelOpen}>
            <MdClose
              onClick={() => setisModelOpen(false)}
              className=" absolute right-10 cursor-pointer
              hover:opacity-70 w-8 h-8 font-extrabold"
            />
            <Tour />
          </Modal>
        </div>

        {/* === Req */}
        <div className="block w-full">
          <Modal isOpen={isReqOpen} setModel={setisReqOpen}>
            <MdClose
              onClick={() => setisReqOpen(false)}
              className="absolute right-10 cursor-pointer
              hover:opacity-70 w-8 h-8 font-extrabold"
            />
            <Req title={title} />
          </Modal>

          {/* === Share Modal */}
          <Modal isOpen={isShareOpen} setModel={setisShareOpen}>
            <MdClose
              onClick={() => setisShareOpen(false)}
              className="absolute right-10 cursor-pointer
              hover:opacity-70 w-8 h-8 font-extrabold"
            />
            <Share />
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Searched;

export async function getServerSideProps({ params }: any) {
  const property = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${params.id}`
  );

  return {
    props: {
      property,
    },
  };
}
