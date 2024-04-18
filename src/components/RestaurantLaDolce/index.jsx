import React from "react";
import LaDolceVita from "../LaDolceVita";
import { Container } from "../RestaurantLaDolce/style";

const RestaurantLaDolce = () => {
  return (
    <div className="container">
      <Container>
        <LaDolceVita />
        <LaDolceVita />
        <LaDolceVita />
        <LaDolceVita />
        <LaDolceVita />
        <LaDolceVita />
      </Container>
    </div>
  );
};

export default RestaurantLaDolce;
