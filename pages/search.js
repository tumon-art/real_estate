import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFilter } from 'react-icons/bs'
import Property from "../comps/Property";
import { SearchFilters } from "../comps/SearchFilters";



import noresult from '../assets/images/noresult.svg'

export default function Search() {
    const [searchFilters,setsearchFilters] = useState(false);

    // ROUTER
    const router = useRouter();

  return (
   <div>
    <div className=" bg-zinc-600 flex justify-center 
    items-center gap-4 py-4 cursor-pointer"
    onClick={()=> setsearchFilters(p=>!p)}
    >

        <p className=" text-2xl text-white font-extrabold">
        Search Property by filters
        </p>

        <BsFilter className=" text-white text-3xl" />

    </div>

    {/* === SEARCH FILTER COMP */}
    {searchFilters && <SearchFilters />}

    <p className=" text-2xl font-extrabold">
        Properties {router.query.purpose}
    </p>

    <div>
        {[].map((property)=> <Property property={property} key={property._id} />)}
    </div>

    {[].length === 0 && (
        <div className=" flex justify-center relative">
        <Image alt="no result" height={400} width='400' src={noresult} />
        <p className=" absolute top-40 text-white font-bold "> NO RESULT ! </p>
        </div>
    )}

   </div>
  )
}
