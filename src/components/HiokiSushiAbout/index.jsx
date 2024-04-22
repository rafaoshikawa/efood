import React from "react";
import { Card, CardTitle, Nota, Description, Border, Button } from "./style";
import temaki from "../../assets/images/temaki.png";
import nota from "../../assets/images/nota.svg";
import { Link } from "react-router-dom";

const HiokiSushiAbout = () => {
  return (
    <div className="container">
      <Card>
        <Nota src={temaki} alt="Temaki" />
        <Border>
          <CardTitle>
            <h3>Temaki Hioki</h3>
            <span>
              <img src={nota} alt="avaliação" />
            </span>
          </CardTitle>
          <Description>
            O Temaki é um cone de alga nori recheado com arroz de sushi e uma
            variedade de ingredientes, como peixe cru, vegetais e molhos,
            oferecendo uma experiência deliciosa e portátil da culinária
            japonesa.
          </Description>
          <Link to="/HiokiSushi">
            <Button>Adicionar ao Carrinho</Button>
          </Link>
        </Border>
      </Card>
    </div>
  );
};

export default HiokiSushiAbout;
