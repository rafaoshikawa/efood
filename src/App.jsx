import React from "react";
import { GlobalCss } from "./style";
import { Routes, Route } from "react-router-dom";
import ListaProdutos from "./components/ListaProdutos";
import RestaurantHioki from "./components/RestaurantHioki";
import RestaurantLaDolce from "./components/RestaurantLaDolce";
import Header from "./components/Header";
import HeaderDetalhe from "./components/HeaderDetalhe";
import Footer from "./components/Footer";
import Italiana from "./components/Italiana";
import Japonesa from "./components/Japonesa";

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
              <ListaProdutos />
            </>
          }
        />
        <Route path="/RestaurantHioki" element={<RestaurantHioki />} />
        <Route path="/RestaurantLaDolce" element={<RestaurantLaDolce />} />
        <Route
          path="/LaDolceVita"
          element={
            <>
              <HeaderDetalhe />
              <Italiana />
              <RestaurantLaDolce />
            </>
          }
        />
        <Route
          path="/HiokiSushi"
          element={
            <>
              <HeaderDetalhe />
              <Japonesa />
              <RestaurantHioki />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
