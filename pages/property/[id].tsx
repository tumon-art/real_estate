import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";

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

  return(
    <div>
      {/* {photos && <ImageScrollbar photos={photos} />} */}
      <ImageScrollbar />
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
