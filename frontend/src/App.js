import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import './App.css';

import { Template } from "./components/MainComponents";
import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Template>
        <Header />

        <Routes />

        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
