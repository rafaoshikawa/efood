import React from "react";
import { Card, CardTitle, Imagem, Description, Border, Button } from "./style";
import temaki from "../../assets/images/temaki.png";
import { Link } from "react-router-dom";

const HiokiSushiAbout = () => {
  return (
    <Card>
      <Imagem src={temaki} alt="Temaki" />
      <Border>
        <CardTitle>Temaki Hioki</CardTitle>
        <Description>
          Temaki é um cone de alga nori com arroz de sushi e uma variedade de
          recheios deliciosos, como peixe cru, vegetais frescos e molhos
          saborosos.
        </Description>
        <Link to="/HiokiSushi">
          <Button>Adicionar ao Carrinho</Button>
        </Link>
      </Border>
    </Card>
  );
};

export default HiokiSushiAbout;
