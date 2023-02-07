import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <h1>Página Inicial</h1>
      
      <Link to="/sobre">Sobre</Link>
    </>
  );
}

export default Page;