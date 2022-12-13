import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function useDB() {
  const { data: session } = useSession();
  const [update, setupdate] = useState<number>(0);
  console.log("useDB");
  useEffect(() => {
    async function call() {
      if (session) {
        getAllFav();
      }
    }
    call();
  }, [session]);

  // -- GET ALL FAV and store it to Local-Sto
  const getAllFav = async () => {
    console.log("getAllFav");
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
        localStorage.setItem("fav", data.allfav.allFav);
        setupdate((p) => ++p);
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
    console.log(JSON.parse(localStorage.fav));
  };

  return {
    pushData,
    addFav,
    getAllFav,
  };
}

export default useDB;
