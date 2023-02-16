import Link from "next/link";
import Image from "next/image";
import {
  MdGrid4X4,
  MdKingBed,
  MdOutlineBathtub,
  MdVerified,
} from "react-icons/md";
import millify from "millify";
import DefaultImage from "../assets/images/house.webp";
import { useState } from "react";
import useDB from "./dls/useDB";

const Property = ({
  property,
  formSearch,
}: {
  property: any;
  formSearch?: boolean;
}) => {
  const [update, setupdate] = useState<number>(0);
  const { addFav } = useDB();

  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  // ------- ON FAV CLICK
  const onFavClck = async (id: any) => {
    addFav(id);
    setupdate((p) => ++p);
  };

  return (
    <div
      className=" rounded-xl group shadow-md hover:shadow-xl
       hover:shadow-sky-200 shadow-sky-200 transition-shadow
      overflow-hidden relative drop-shadow-2xl
      "
    >
      {/* === AFTER */}
      <div
        className={` h-full propertyAfter duration-1000 
      absolute bg-sky-400 w-full z-[-1]`}
      ></div>

      <div className=" rounded-t-lg box-border mt-[3px] mr-[3px] ml-[3px] overflow-hidden">
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="img"
          className=" h-[200px] sm:h-[260px] cursor-text min-w-full group-hover:scale-125 
          transition-transform sm:rounded-sm duration-1000 object-cover"
        />

        {/* === FAV */}
        <svg
          className={` transition duration-300 right-4  bottom-[100px]  
        text-gray-300 absolute h-10 w-10 cursor-pointer hover:stroke-red-600
        ${
          global.localStorage.fav &&
          JSON.parse(localStorage.fav).filter(
            (id: any) => id == property.externalID
          ).length >= 1
            ? " fill-red-600"
            : "fill-transparent"
        }
       `}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => onFavClck(externalID)}
        >
          <path
            d="M4.318 6.318a4.5 
        4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 
        7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>

      <Link
        href={`/${formSearch ? "searched" : "property"}/${externalID}`}
        passHref
      >
        <div className=" cursor-pointer  px-2 py-1 text-sm bg-zinc-100">
          <div className=" flex items-center justify-between">
            {/* === PRICE  */}
            <div className="flex items-center gap-2 text-zinc-700 ">
              <div className=" text-cyan-700">
                {isVerified && <MdVerified className="text-lg" />}
              </div>
              <div className="font-bold">
                AED
                <span className="  ml-2 text-sky-800 ">
                  {millify(Number(price))}
                </span>{" "}
                {rentFrequency && ` /${rentFrequency}`}
              </div>
            </div>

            <div className=" flex justify-center items-center">
              {/* === AVATAR */}
              <Image
                className=" h-6 w-6 object-cover rounded-full"
                src={agency?.logo?.url}
                width="100"
                height="100"
                alt="avater"
                loading="lazy"
              />
            </div>
          </div>
          {/* === CARD FOOTER */}
          <div>
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
          </div>

          {/* === CARD FOOTER DESC  */}
          <div
            className=" text-zinc-700 text-sm my-1 whitespace-nowrap
            overflow-hidden"
          >
            <div className=" lg:hidden">
              {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </div>

            <div className=" hidden lg:block">
              {title.length > 40 ? `${title.substring(0, 40)}...` : title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Property;
