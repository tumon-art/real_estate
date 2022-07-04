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
   <div className=" flex flex-wrap justify-center sm:px-10 py-2 text-zinc-500">
    {filters.map((filter)=>( 
      <div key={filter.queryName}>
       <select className=" text-sm p-1 m-1 "
      defaultValue=''>
        <option disabled value=''> {filter.placeholder} </option>
        {filter?.items?.map((item) => (
              <option className=" text-gray-900" 
              value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
      </select>
      </div>
    ))}
   </div>

  )
}
