import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdHotelClass } from 'react-icons/md'
import millify from "millify";

import DefaultImage from "../assets/images/house.webp";

const Property = ({ property }) => {
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
      externalID
  } = property


  return (
    <Link href={`/property/${externalID}`} passHref>
      <div className="   overflow-hidden">

        <div className=" leading-[0] overflow-hidden">
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
            alt="img"
            className="hover:scale-150 transition-transform rounded-t-lg duration-1000"
          />
        </div>

        <div className="  px-2 py-1 text-sm ">
          <div className=" flex items-center justify-between">

            {/* === PRICE  */}
            <div className="flex items-center gap-2 text-zinc-700 ">
              <div className=" text-emerald-700">
                {isVerified && <MdHotelClass />}
              </div>
              <p className="font-bold">
                AED
                <span className="  ml-2 text-green-900 ">
                  {millify(price)}
                </span>{" "}
                
                {rentFrequency && ` /${rentFrequency}`}
               
              </p>
            </div>

            <div className=" flex justify-center items-center">
            {/* === AVATAR */}
              <img className=" h-6 w-6 object-cover rounded-full"
              src={agency?.logo?.url} alt='avater' loading="lazy" />
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default Property;
