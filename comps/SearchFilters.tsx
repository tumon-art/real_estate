import { useRouter } from "next/router";
import { useState } from "react";

import { filterData, getFilterValues } from "../utils/filterData";

export const SearchFilters = () => {
  const [filters, setfilters] = useState(filterData);

  const router = useRouter();

  const searchProperties = (filterValues: any) => {
    const path = router.pathname;
    const { query } = router;

    const values: any = getFilterValues(filterValues);

    values.forEach((item: any) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };
  return (
    <div className=" flex flex-wrap justify-center sm:px-10 py-2 text-zinc-500">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <select
            className=" text-sm p-1 m-1 "
            defaultValue=""
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            <option disabled value="">
              {" "}
              {filter.placeholder}{" "}
            </option>

            {filter?.items?.map((item) => (
              <option
                className=" text-gray-900"
                value={item.value}
                key={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
