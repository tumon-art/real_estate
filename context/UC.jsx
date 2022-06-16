import React, { useReducer } from "react";


const initialState = {
  isLoggedIn: false,
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
    default:
      return state;
  }
};

export const UC = React.createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state.isLoggedIn)
  return (
    <>
      <UC.Provider
        value={{
          dispatch,
        }}
      >
        {children} 
      </UC.Provider>
    </>
  );
};

export default Provider;
