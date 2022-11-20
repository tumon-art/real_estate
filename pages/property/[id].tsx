import { MdGrid4X4, MdKingBed, MdOutlineBathtub } from "react-icons/md";
import millify from "millify";
import moment from "moment";
import { baseUrl, fetchApi } from "../../utils/fetchData";
import ImageScrollbar from "../../comps/dls/ImageScrollBar/ImageScrollbar";
import Map from "../../comps/Map";
import Tour from "../../comps/Tour";

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
  return (
    <div className=" md:px-20 text-sky-700">
      {photos && <ImageScrollbar photos={photos} />}

      <div className=" mx-2 sm:mx-0 flex justify-between">
        <div className="  font-bold">
          AED
          <span className=" ml-2 text-sky-800 ">{millify(price)}</span>{" "}
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

        <section className="lg:flex my-5 gap-8">
          <div className="lg:w-[60%]">
            <Map geography={geography} />
            <h4 className=" border-b-2 text-xl font-bold font-FiraMono my-5 ">
              Description
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="  h-96 overflow-auto  text-zinc-900 whitespace-pre-line"
            ></div>
          </div>

          <div className=" w-[40%] ">
            <Tour days={days} />
          </div>
        </section>
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
