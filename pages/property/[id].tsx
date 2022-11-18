import { MdGrid4X4, MdKingBed, MdOutlineBathtub } from "react-icons/md";
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
    description,
    photos,
  },
}: any) => {

  return (
    <div className=" md:px-20 text-sky-700">
      {photos && <ImageScrollbar photos={photos} />}

      <div className=" mx-2 sm:mx-0 flex justify-between">
        <div className="  font-bold">
          AED
          <span className="   ml-2 text-sky-800 ">{millify(price)}</span>{" "}
          {rentFrequency && ` /${rentFrequency}`}
        </div>

        <div className="ring-4 ring-sky-200  rounded-full flex justify-center items-center">
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
          <b>{rooms}</b>
          <span title="Bed">
            <MdKingBed />
          </span>
          | <b>{baths}</b>
          <span title="Bathtub">
            <MdOutlineBathtub />
          </span>
          |<b>{millify(area)}</b>
          <span title="Area">
            <MdGrid4X4 />
          </span>
        </div>

        <h1 className=" my-2 text-lg sm:text-xl font-bold"> {title}</h1>
        <hr className=" mt-5"></hr>
        <div dangerouslySetInnerHTML={{ __html: description }}
          className="  my-10 text-zinc-900 whitespace-pre-line">
        </div>
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
