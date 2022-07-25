import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchData";
import ImageScrollbar from "../../comps/dls/ImageScrollBar/ImageScrollbar";

const Property = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}: any) => {
  return (
    <div className=" font-FiraMono md:px-20 text-sky-700">
      {photos && <ImageScrollbar photos={photos} />}

   <div className=" mx-2 sm:mx-0 flex justify-between">
   <div className="  font-bold">
        AED
        <span className="   ml-2 text-sky-800 ">{millify(price)}</span>{" "}
        {rentFrequency && ` /${rentFrequency}`}
        
      </div>

      <div className="ring-4  rounded-full flex justify-center items-center">
              {/* === AVATAR */}
              <img
                className=" h-6 w-6 object-cover rounded-full"
                src={agency?.logo?.url}
                width="30"
                height="30"
                alt="avater"
                loading="lazy"
              />
            </div>
   </div>

      <div className=" mx-2 sm:mx-0 my-2">
        <div className=" flex gap-3 items-center text-cyan-700">
          <b>{rooms}</b> <FaBed /> | <b>{baths}</b> <FaBath /> |
          <b>{millify(area)}</b> <BsGridFill />
        </div>

        <h1 className=" my-2 text-lg sm:text-xl font-bold"> {title}</h1>
        <hr className=" mt-5"></hr>
        <p className="  my-10 text-zinc-900 whitespace-pre-line"> {description} </p>

      </div>

      
    </div>
  );
};
export default Property;

export async function getServerSideProps({ params: { id } }: any) {
  const propertyDetails = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${id}`
  );

  return {
    props: {
      propertyDetails,
    },
  };
}
