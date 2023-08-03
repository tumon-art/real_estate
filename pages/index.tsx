import { useEffect, useState } from "react";
import { MdSell } from "react-icons/md";
import Agents from "../comps/Agents";
import Banner from "../comps/dls/Banner/Banner";
import FooterLinks from "../comps/FooterLinks";
import HomeSearch from "../comps/HomeSearch";
import Property from "../comps/Property";

import { baseUrl, fetchApi } from "../utils/fetchData";

// GET STATIC PROPS
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}

export default function Home({ propertyForSale, propertyForRent }: any) {
  const [count, setcount] = useState(false);

  useEffect(() => {
    if (!localStorage.fav) {
      localStorage.setItem("fav", "");
    }
    setcount(true);
  }, []);

  const ForWhat = ({ text }: { text: string }) => (
    <h2
      className=" block  sm:inline-block self-start mx-1 sm:mx-10 text-xl font-extrabold
      text-sky-500 border-t-2 border-sky-300 sm:border-t-0 sm:border-b-4 ring-sky-400
      sm:border-sky-400 my-1 sm:my-5 sm:ring-2 px-4 rounded-xl sm:rounded-sm"
    >
      <span className="flex items-center gap-2">
        <MdSell /> {text}
      </span>
    </h2>
  );

  return (
    <div className=" flex flex-col items-center ">
      <Banner />
      <div className=" rounded-t-2 border-t-4 border-cyan-400 bg-white z-50 flex flex-col items-center ">
        <h1
          className=" font-OpenSans text-lg sm:text-4xl my-5 sm:my-10 font-extrabold animate-pulse
        text-sky-400 border-l-8 border-sky-200 px-8 drop-shadow-2xl"
        >
          Explore homes with us ...
        </h1>

        <div>
          <ForWhat text="For Rent" />
          {/* === PROPERTY MAP */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10">
            {count &&
              propertyForSale
                .slice(1, 7)
                .map((property: any) => (
                  <Property property={property} key={property.id} />
                ))}
          </div>
        </div>

        <div>
          <ForWhat text="For Sell" />
          {/* === PROPERTY MAP */}
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10">
            {count &&
              propertyForRent
                .slice(0, 6)
                .map((property: any) => (
                  <Property property={property} key={property.id} />
                ))}
          </div>
        </div>
        <Agents />
        <HomeSearch />
        <FooterLinks />
      </div>
    </div>
  );
}
