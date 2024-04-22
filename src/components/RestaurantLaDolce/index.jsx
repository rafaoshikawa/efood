import React from "react";
import LaDolceVitaAbout from "../LaDolceVitaAbout";
import { Container } from "../RestaurantLaDolce/style";

const RestaurantLaDolce = () => {
  return (
    <div className="container">
      <Container>
        <LaDolceVitaAbout />
        <LaDolceVitaAbout />
        <LaDolceVitaAbout />
        <LaDolceVitaAbout />
        <LaDolceVitaAbout />
        <LaDolceVitaAbout />
      </Container>
    </div>
  );
};

export default RestaurantLaDolce;
