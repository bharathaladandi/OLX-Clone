
import React from 'react'
import { useSelector } from "react-redux";
import  {Navigate, useLocation}  from 'react-router-dom'

export const Privateroute = ({children}) => {
    const isAuth = useSelector((store)=>store.isAuth)
    const location = useLocation();
    
    const from = {
        pathname: location.pathname,
      };


    if(isAuth) return children;
    return <Navigate to={"/"} state={from} replace />
}



