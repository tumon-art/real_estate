function useDB() {
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
    addFav,
  };
}

export default useDB;
