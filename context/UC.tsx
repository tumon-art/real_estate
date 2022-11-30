import React, { useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  sidebar: false,
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
    default:
      return state;
  }
};
export const UC = React.createContext<any>(null);

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addFav = (property: any) => {
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
        }}
      >
        {children}
      </UC.Provider>
    </>
  );
};

export default Provider;
