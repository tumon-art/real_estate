import create from "zustand";

interface MainStates {
  allFav: any;
  setFav: (id: string) => void;
  userMail: string;
  setUserMail: (email: string) => void;
}

const useMainStore = create<MainStates>((set) => ({
  allFav: [],
  userMail: "",
  setUserMail: (email) => set((state) => ({ userMail: email })),
  setFav: (id) =>
    set((state) => {
      const isExist = state.allFav.find((each: any) => each == id);
      if (isExist) {
        const filterd = state.allFav.filter((each: any) => each !== id);
        return {
          allFav: filterd,
        };
      } else {
        return {
          allFav: [...state.allFav, id],
        };
      }
    }),
}));

export default useMainStore;
