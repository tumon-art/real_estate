import {create} from "zustand";

interface MainStates {
  allFav: string[];
  setFav: (arr: string[]) => void;
  userMail: string;
  setUserMail: (email: string) => void;
  sidebar: boolean;
  setSideBar: () => void;
}

const useMainStore = create<MainStates>((set) => ({
  allFav: [],
  userMail: "",
  sidebar: false,
  setSideBar: () => set((state) => ({ sidebar: !state.sidebar })),
  setUserMail: (email) => set((state) => ({ userMail: email })),
  setFav: (payload) => set((state) => ({ allFav: payload })),
}));

export default useMainStore;
