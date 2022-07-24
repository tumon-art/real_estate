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
    <div>
      {photos && <ImageScrollbar photos={photos} />}

      <div className="font-bold">
        AED
        <span className="  ml-2 text-sky-800 ">{millify(price)}</span>{" "}
        {rentFrequency && ` /${rentFrequency}`}
      </div>
      <div>
        <div className=" flex gap-3 items-center text-cyan-700">
          <b>{rooms}</b> <FaBed /> | <b>{baths}</b> <FaBath /> |
          <b>{millify(area)}</b> <BsGridFill />
        </div>
        <h1 className=" text-xl font-bold"> {title}</h1>
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
