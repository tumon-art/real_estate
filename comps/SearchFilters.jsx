import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MdCancel } from 'react-icons/md'

import { filterData, getFilterValues } from "../utils/filterData"

export const SearchFilters = () => {
  const [filters,setfilters] = useState(filterData)
  const searchProperties = (filterValues) => {
  };
  return (
   <div className=" flex text-black">
    {filters.map((filter)=>( 
      <div key={filter.queryName}> {console.log(filter)}
        <select className=" w-fit  p-1"
                value={filter.placeholder}
        onChange={( e => searchProperties({[filter.queryName] : e.target.value}))}
        >
        </select>
      </div>
    ))}
   </div>

  )
}
