// LaDolceVita.jsx
import React from "react";
import {
  Card,
  CardTitle,
  Description,
  Border,
  Button,
  ContainerTag,
  Prato,
} from "./style";
import macarrao from "../../assets/images/macarrao.png";
import nota from "../../assets/images/nota.svg";
import { Link } from "react-router-dom";

const LaDolceVita = () => {
  return (
    <Card>
      <Prato src={macarrao} alt="Macarrão" />
      <Border>
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <span>
            <img src={nota} alt="avaliação" />
          </span>
          <ContainerTag>
            <span>Italiana</span>
          </ContainerTag>
        </CardTitle>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Link to="/LaDolceVita">
          <Button>Saiba Mais</Button>
        </Link>
      </Border>
    </Card>
  );
};

export default LaDolceVita;
