import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../comps/dls/Banner/Banner";
import Property from "../comps/Property";

import { baseUrl, fetchApi } from "../utils/fetchData";

// GET STATIC PROPS
// export async function getStaticProps() {

//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`)
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=10&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`)

//   return {
//     props: {
//       propertyForSale: propertyForSale?.hits,
//       propertyForRent: propertyForRent?.hits,
//     }
//   }
// }

// { propertyForSale, propertyForRent }
export default function Home() {
  const [data, setdata] = useState();

  // === GET DATA FROM LOCAL STORAE
  useEffect(() => {
    const getData = localStorage.getItem("data");
    setdata(JSON.parse(getData));
  }, []);

  // === FETCH DATA TO SAVE IN LOCAL STORAGE
  // useEffect(()=>{
  //   (async function(){
  //     const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`)
  //     const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`)
  //     localStorage.setItem('data', JSON.stringify([propertyForRent,propertyForSale]))
  //   })()

  // },[])


  // FOR SALE OR RENT
  const ForWhat = ({ text }) => (
    <h2
      className=" self-start mx-1 sm:mx-10 text-xl font-extrabold 
  text-sky-500 border-b-4 border-sky-400 my-1 sm:my-5 ring-1 px-4 rounded-sm"
    >
      {text}
    </h2>
  );

  if (data) {
    return (
      <div className=" flex flex-col items-center ">
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1=" Explore from Apartments, builder floors, villas"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
        />

        <h1
          className=" text-lg sm:text-4xl my-5 sm:my-10 font-extrabold animate-pulse font-FiraMono 
        text-sky-600 border-l-8 border-sky-200 px-8"
        >
          Explore homes with us ...
        </h1>

        <ForWhat text="For Rent" />
        {/* === PROPERTY MAP */}
        <div
          className=" grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10
        "
        >
          {data[0].hits.slice(1, 7).map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>

        <ForWhat text="For Sell" />
        {/* === PROPERTY MAP */}
        <div
          className=" grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10
         "
        >
          {data[1].hits.slice(0, 6).map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      </div>
    );
  }
  // return (
  //   <div className=" flex flex-col items-center  md:mx-20">
  //    <IsLoggedIn />
  //     <Banner purpose='RENT A HOME'
  //       title1='Rental Homes for'
  //       title2='Everyone'
  //       desc1=' Explore from Apartments, builder floors, villas'
  //       desc2='and more'
  //       buttonText='Explore Renting'
  //       linkName='/search?purpose=for-rent'
  //       imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
  //     />

  //     {/* === PROPERTY MAP */}
  //     <div className=" grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 my-10
  //       ">
  //       {propertyForRent.slice(1, 7).map((property) => <Property property={property} key={property.id} />)}
  //     </div>

  //     <Banner purpose='BUY A HOME'
  //       title1=' Find, Buy & Own Your'
  //       title2='Dream Home'
  //       desc1=' Explore from Apartments, land, builder floors,'
  //       desc2=' villas and more'
  //       buttonText='Explore Buying'
  //       linkName='/search?purpose=for-sale'
  //       imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
  //     />

  //     {/* === PROPERTY MAP */}
  //     <div className=" grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 my-10
  //        ">
  //       {propertyForSale.slice(0, 6).map((property) => <Property property={property} key={property.id} />)}
  //     </div>

  //   </div>
  // )
}
