import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
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
      <div className=" group hover:shadow-xl shadow-zinc-200 transition-shadow
      overflow-hidden relative 
      ">

      {/* === AFTER */}
    <div className={`
    group-hover:skew-x-[0deg] duration-1000 
    absolute bg-sky-600 w-full md:block hidden skew-x-[40deg] z-[-1] h-full`}>

    </div>
              {/* <div className=" absolute bg-cyan-100 w-full  skew-y-2 z-[-10] h-full"></div> */}
        <div className=" leading-[0] mt-1 mr-1 ml-1 overflow-hidden">
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
            alt="img"
            className=" group-hover:scale-125 transition-transform sm:rounded-sm duration-1000"
          />
        </div>

        <div className="  px-2 py-1 text-sm bg-zinc-100">
          <div className=" flex items-center justify-between">

            {/* === PRICE  */}
            <div className="flex items-center gap-2 text-zinc-700 ">
              <div className=" text-cyan-700">
                {isVerified && <GoVerified />}
              </div>
              <div className="font-bold">
                AED
                <span className="  ml-2 text-sky-800 ">
                  {millify(price)}
                </span>{" "}
                
                {rentFrequency && ` /${rentFrequency}`}
               
              </div>
            </div>

            <div className=" flex justify-center items-center">
            {/* === AVATAR */}
              <Image className=" h-6 w-6 object-cover rounded-full"
              src={agency?.logo?.url} width='30' height='30' alt='avater' loading="lazy" />
            </div>


          </div>
          {/* === CARD FOOTER */}
            <div>
              <div className=" flex gap-3 items-center text-cyan-700">
                <b>{rooms}</b> <FaBed /> | <b>{baths}</b> <FaBath /> |
                 <b>{millify(area)}</b> <BsGridFill />
              </div>
            </div>

           {/* === CARD FOOTER DESC  */}
           <div className=" text-zinc-700 text-sm my-1 whitespace-nowrap
            overflow-hidden">
              <div className=" lg:hidden">
              {title.length > 30? `${title.substring(0,30)}...` : title}
              </div>

              <div className=" hidden lg:block">
              {title.length > 40? `${title.substring(0,40)}...` : title}
              </div>
           </div>
        </div>
      </div>
    </Link>
  );
};

export default Property;
