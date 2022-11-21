import {
  MdClose,
  MdGrid4X4,
  MdKingBed,
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
import Image from "next/future/image";
import Req from "../../comps/Req";

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

const Property = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    description,
    photos,
    geography,
  },
}: any) => {
  const [isModelOpen, setisModelOpen] = useState<boolean>(false);
  const [isReqOpen, setisReqOpen] = useState<boolean>(false);
  return (
    <div className=" md:px-20 text-sky-700">
      {photos && <ImageScrollbar photos={photos} />}

      <div className=" mx-2 sm:mx-0 flex justify-between">
        <div className="  font-bold">
          AED
          <span className=" ml-2 text-sky-800 ">
            {millify(Number(price))}
          </span>{" "}
          {rentFrequency && ` /${rentFrequency}`}
        </div>

        <div className="ring-4 ring-sky-200  rounded-full flex justify-center items-center">
          {/* === AVATAR */}
          <Image
            className=" h-6 w-6 object-cover rounded-full"
            src={agency?.logo?.url}
            width="30"
            height="30"
            alt="avater"
          />
        </div>
      </div>

      <div className=" mx-2 sm:mx-0 my-2">
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

        <h1 className=" my-2 text-lg sm:text-xl font-bold"> {title}</h1>
        <hr className=" mt-5"></hr>

        <section className="lg:flex my-5 gap-8">
          <div className="lg:w-4/6">
            <Map geography={geography} />
            <h4 className=" border-b-2 text-xl font-bold font-FiraMono my-5 ">
              Description
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="  h-96 overflow-auto  text-zinc-900 whitespace-pre-line"
            ></div>
          </div>
          <nav
            className=" pt-2 gap-3 md:pt-0 fixed md:relative bottom-0 left-0 h-auto md:h-52  md:w-2/6 w-[100vw]
           flex flex-col  md:gap-5 md:my-5 justify-center bg-white items-center"
          >
            <p className=" pb-2 md:pb-0 order-3 md:order-0 text-xs text-zinc-600 text-center font-medium">
              Request a tour as early as
              <span className=" md:block font-bold text-center">
                {" "}
                Today at 11:00AM{" "}
              </span>
            </p>
            <div className=" flex justify-evenly w-full gap-5 px-3 md:flex-col">
              <button
                onClick={() => setisModelOpen(true)}
                className=" bg-sky-200 cursor-pointer ring-4 ring-sky-200 hover:text-sky-900 
           text-sky-700 text-lg font-extrabold w-full rounded-sm py-2 "
              >
                Schedule A Tour
              </button>

              <button
                onClick={() => setisReqOpen(true)}
                className=" ring-4 ring-sky-200 rounded-sm py-2 w-full 
              cursor-pointer hover:text-sky-900 bg-white
           text-sky-700 text-lg font-extrabold"
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

            <Tour days={days} />
          </Modal>
        </div>
        {/* === Req */}
        <div className=" block w-full">
          <Modal isOpen={isReqOpen} setModel={setisReqOpen}>
            <MdClose
              onClick={() => setisReqOpen(false)}
              className=" absolute right-10 cursor-pointer 
              hover:opacity-70 w-8 h-8 font-extrabold"
            />

            <Req title={title} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Property;

export const getStaticPaths = async () => {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );

  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );

  const all = [...propertyForSale.hits, ...propertyForRent.hits];

  const paths: any = all.map((e: any) => {
    return {
      params: {
        id: e.externalID,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const propertyDetails = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${params.id}`
  );

  return {
    props: {
      propertyDetails,
    },
  };
}
