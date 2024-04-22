import React from "react";
import HiokiSushiAbout from "../HiokiSushiAbout";
import { Container } from "./style";

const RestaurantHioki = () => {
  return (
    <div className="container">
      <Container>
        <HiokiSushiAbout />
        <HiokiSushiAbout />
        <HiokiSushiAbout />
        <HiokiSushiAbout />
        <HiokiSushiAbout />
        <HiokiSushiAbout />
      </Container>
    </div>
  );
};

export default RestaurantHioki;
