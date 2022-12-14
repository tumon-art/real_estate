import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useMainStore from "../../context/mainStore";

function useDB() {
  const { data: session } = useSession();
  const [update, setupdate] = useState<number>(0);
  const setFav = useMainStore((state) => state.setFav);
  const allFav = useMainStore((state) => state.allFav);

  useEffect(() => {
    async function call() {
      if (session) {
        getAllFav();
      }
    }
    call();
  }, [session]);

  console.log(allFav);

  // -- GET ALL FAV and store it to Local-Sto
  const getAllFav = async () => {
    if (session) {
      const res = await fetch("http://localhost:3000/api/getfav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMail: session.user?.email,
        }),
      });
      const data = await res.json();
      if (data.allfav !== null) {
        setFav(JSON.parse(data.allfav.allFav));
        localStorage.setItem("fav", data.allfav.allFav);
        setupdate((p) => ++p);
      }
    }
  };

  // -- Fetch all Favs
  const fetchAllFavs = async () => {
    if (session) {
      const res = await fetch("http://localhost:3000/api/getfav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMail: session.user?.email,
        }),
      });
      const data = await res.json();
      if (data.allFav) {
        return null;
        // setupdate((p) => ++p);
      }
    }
  };

  // -- push data
  async function pushData() {
    if (session) {
      const res = await fetch("http://localhost:3000/api/fav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          allFav: JSON.parse(localStorage.fav),
          userMail: session.user?.email,
        }),
      });

      getAllFav();
      console.log(res);
    }
  }
  // SAVE ALL FAV
  const addFav = (property: any) => {
    if (localStorage.fav) {
      if (
        // Copy
        JSON.parse(localStorage.fav).filter((e: any) => e == property).length >=
        1
      ) {
        const filterd = JSON.parse(localStorage.fav).filter(
          (e: any) => e !== property
        );
        localStorage.setItem("fav", JSON.stringify(filterd));
      } else {
        // Marge
        localStorage.setItem(
          "fav",
          JSON.stringify([...JSON.parse(localStorage.fav), property])
        );
      }
    } else {
      localStorage.setItem("fav", JSON.stringify([property]));
    }
  };

  return {
    pushData,
    addFav,
    getAllFav,
    fetchAllFavs,
  };
}

export default useDB;
