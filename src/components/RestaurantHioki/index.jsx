import React from "react";
import HiokiSushi from "../HiokiSushi";
import { Container } from "../RestaurantLaDolce/style";

const RestaurantLaDolce = () => {
  return (
    <div className="container">
      <Container>
        <HiokiSushi />
        <HiokiSushi />
        <HiokiSushi />
        <HiokiSushi />
        <HiokiSushi />
        <HiokiSushi />
      </Container>
    </div>
  );
};

export default RestaurantLaDolce;
