import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFilter } from 'react-icons/bs'
import Property from "../comps/Property";
import { SearchFilters } from "../comps/SearchFilters";
import { MdSell } from 'react-icons/md'

// SVG 
import noresult from '../assets/images/noresult.svg'

import { baseUrl, fetchApi } from "../utils/fetchData";

export default function Search({ properties }) {
    const [searchFilters,setsearchFilters] = useState(false);

    // ROUTER
    const router = useRouter();

  return (
   <div>
    <div className=" bg-sky-500 flex border-b-4 border-t-4 border-sky-400 justify-center 
    items-center gap-4 py-4 cursor-pointer"
    onClick={()=> setsearchFilters(p=>!p)}
    >

        <p className=" text-xl text-white font-extrabold">
        Search Property by filters
        </p>

        <BsFilter className=" text-white text-xl mt-1" />

    </div>

    {/* === SEARCH FILTER COMP */}
    {searchFilters && <SearchFilters />}
    <p className=" flex items-center text-xl text-sky-600 ml-4 mt-2 font-extrabold  ">

     <span className=" flex gap-2 items-center border-b-4 py-2 px-4">
     <MdSell />  Properties {router.query.purpose}
     </span>
    </p>

    {/* === SHOW PROPERTIES */}
    <div className=" grid sm:grid-cols-2 sm:mx-20 my-10 md:grid-cols-3 justify-center gap-8 ">
        {properties.slice(0,9).map((property)=> <Property property={property} key={property.id} />)}
    </div>
    {/* === NO RESULT COMP */}
    {properties.length == 0 && (
        <div className=" flex justify-center relative">
        <Image alt="no result" height={400} width='400' src={noresult} />
        <p className=" absolute top-40 text-white font-bold "> NO RESULT ! </p>
        </div>
    )}

   </div>
  )
}

export async function getServerSideProps({query}) {
    
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&hitsPerPage=10&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)

    return {
        props: {
            properties: data?.hits
        }
    }
}
