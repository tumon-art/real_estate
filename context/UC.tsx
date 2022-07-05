import React, { useEffect, useReducer } from "react";

const initialState = {
  isLoggedIn:false,
  sidebar:false,
  fav:null ,
  favClick:false,
};

const Reducer = (state:any, action:any) => {
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
      case "SIDEBAR_TOGGLE":
        return {
            ...state,sidebar: !state.sidebar
        }
        break;
      case "SIDEBAR_OFF":
        return {
            ...state,sidebar: false
        }
        break;
      case "ADD_FAV":
        return {
          ...state,fav:action.paylod
        }
        break;
      case "FAV_CLICK":
        return {
          ...state,favClick: !state.favClick
        }
    default:
      return state;
  }
};
export const UC = React.createContext<any>(null);

const Provider = ({ children }:any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  
    const addFav = (property:any) => {
    if(localStorage.fav) {
      localStorage.setItem('fav',JSON.stringify([...JSON.parse(localStorage.fav),property]))
    } else {
      localStorage.setItem('fav',JSON.stringify([property]))
    }
    console.log(JSON.parse(localStorage.fav))
    }


// useEffect(()=>{

//     if(localStorage.fav) {
//       dispatch({
//         type:"ADD_FAV",
//         paylod:JSON.parse(localStorage.fav)
//       })
//     }


// })

  return (
    <>
      <UC.Provider
        value={{
          dispatch,addFav,
          fav:state.fav,
          sidebar:state.sidebar,
          favClick:state.favClick
        }}
      >
        {children} 
      </UC.Provider>
    </>
  );
};

export default Provider;
