import React from "react";
import { Card, CardTitle, Imagem, Description, Border, Button } from "./style";
import pizza from "../../assets/images/pizza.png";
import { Link } from "react-router-dom";

const LaDolceVitaAout = () => {
  return (
    <Card>
      <Imagem src={pizza} alt="Pizza" />
      <Border>
        <CardTitle>Pizza Marguerita</CardTitle>
        <Description>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Description>
        <Link to="/LaDolceVita">
          <Button>Adicionar ao Carrinho</Button>
        </Link>
      </Border>
    </Card>
  );
};

export default LaDolceVitaAout;
