import { useEffect, useState } from "react";
import useMainStore from "../context/mainStore";
import { baseUrl, fetchApi } from "../utils/fetchData";

export default function Fav() {
  const allFav = useMainStore((state) => state.allFav);

  const [propeties, setpropeties] = useState<object[] | void>();

  useEffect(() => {
    setpropeties(undefined);
    if (allFav) {
      allFav.map(async (each: string) => {
        const res = await fetchApi(
          `${baseUrl}/properties/detail?externalID=${each}`
        );

        if (res) {
          setpropeties((prev) => (prev ? [...prev, res] : [res]));
        }
      });
    }
  }, []);

  console.log(propeties);

  return <div> Nothing</div>;
}
