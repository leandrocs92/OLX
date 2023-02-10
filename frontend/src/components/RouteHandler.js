import React from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler";

export default ({ children }) => {
  const navigate = useNavigate();
  let logged = isLogged();
  let authorized = logged ? true : false;
  
  if(authorized) {
    return children;
  } else {
    navigate('/signin');
    return null;
  }
}