// HiokiSushi.jsx
import React from "react";
import { Card, CardTitle, Description, Border, Button, ContainerTag } from "./style";
import sushi from "../../assets/images/sushi.png";
import nota from "../../assets/images/nota.svg";
import { Link } from "react-router-dom";

const Destaque = () => {
  return (
    <div className="container">
      <Card>
        <img src={sushi} alt="sushi" />
        <Border>
          <CardTitle>
            <h3>Hioki Sushi </h3>
            <span>
              <img src={nota} alt="avaliação" />
            </span>
            <ContainerTag>
              <span>Destaque da Semana</span>
              <span>Japonesa</span>
            </ContainerTag>
          </CardTitle>
          <Description>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </Description>
          <Link to="/HiokiSushi">
            <Button>Saiba Mais</Button>
          </Link>
        </Border>
      </Card>
    </div>
  );
};

export default Destaque;
