import React from "react";
import { GlobalCss } from "./style";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeaderCart from "./components/HeaderCart";
import Restaurantes from "./components/Restaurantes";
import PratosRestaurantes from "./components/PratosRestaurantes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalCss />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Restaurantes />
            </>
          }
        />
        <Route
          path="/restaurantes/:id"
          element={
            <>
              <HeaderCart />
              <PratosRestaurantes />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
