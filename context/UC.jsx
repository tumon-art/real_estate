import React, { useReducer } from "react";


const initialState = {
  isLoggedIn: false,
  fav:[],
};


const Reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
        return {
            ...state,isLoggedIn: true,
        };
        break;
    case "LOG_OUT":
        return {
            ...state,isLoggedIn: false,
        }
        break;
        case "FAV_ADD":
          return {
              ...state,fav: [...state.fav,action.payload],
          }
          break;
    default:
      return state;
  }
};

export const UC = React.createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state)
  return (
    <>
      <UC.Provider
        value={{
          dispatch,
          fav:state.fav
        }}
      >
        {children} 
      </UC.Provider>
    </>
  );
};

export default Provider;
