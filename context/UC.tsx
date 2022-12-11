import React, { useReducer } from "react";

type Types = {
  isLoggedIn: boolean;
  sidebar: boolean;
  userMail: string;
  allFav: string[];
};
// UPDATE FAV & CHECK IF DUPLICATE
const initialState: Types = {
  isLoggedIn: false,
  sidebar: false,
  userMail: "",
  allFav: [],
};

const UpdateFav = (payload: any) => {
  const isExist = initialState.allFav.find((each: any) => each == payload);

  if (isExist) {
    const filterd = initialState.allFav.filter((each: any) => each !== payload);
    console.log("filterd", filterd);
    return (initialState.allFav = filterd);
  } else {
    return initialState.allFav.push(payload);
  }
};

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
      break;
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
      };
      break;
    case "SIDEBAR_TOGGLE":
      return {
        ...state,
        sidebar: !state.sidebar,
      };
      break;
    case "SIDEBAR_OFF":
      return {
        ...state,
        sidebar: false,
      };
      break;

    case "SET_MAIL":
      return {
        ...state,
        userMail: action.payload,
      };
      break;
    default:
      return state;
  }
};
export const UC = React.createContext<any>(null);

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addFav = (property: any) => {
    UpdateFav(property.id);

    setTimeout(() => {
      console.log(state.allFav);
    }, 1000);
    if (localStorage.fav) {
      if (
        JSON.parse(localStorage.fav).filter((e: any) => e.id == property.id)
          .length >= 1
      ) {
        const filterd = JSON.parse(localStorage.fav).filter(
          (e: any) => e.id !== property.id
        );
        localStorage.setItem("fav", JSON.stringify(filterd));
      } else {
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

  return (
    <>
      <UC.Provider
        value={{
          dispatch,
          addFav,
          sidebar: state.sidebar,
          userMail: state.userMail,
          allFav: state.allFav,
        }}
      >
        {children}
      </UC.Provider>
    </>
  );
};

export default Provider;
