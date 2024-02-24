// create a coontext (warehouse)
//Provider
//consumer

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";
const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Suleman Khan",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Good boy",
        image: "./images/about1.svg",
      },
    });
  };

  // to get the api data
  const getServices = async (url) => {
    try{
      const res = await fetch(url);
      const data= await res.json();
      dispatch({type:"GET_SERVICES", payload:data});
    }catch (error) {
      console.log(error);
    } 
  }
  // to call API
   useEffect(()=> {
    getServices(API);
   },[]);
   
   
    return(
        <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
            {children}
        </AppContext.Provider>
    );
};


//Gobal custom hook
 const useGlobalContext= () => {
    return useContext(AppContext);
};
export  {AppProvider,AppContext,useGlobalContext};