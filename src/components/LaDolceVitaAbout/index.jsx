// LaDolceVita.jsx
import React from "react";
import { Card, CardTitle,Nota, Description, Border, Button } from "./style";
import pizza from "../../assets/images/pizza.png";
import nota from "../../assets/images/nota.svg";
import { Link } from "react-router-dom";

const LaDolceVita = () => {
  return (
    <div className="container">
      <Card>
        <Nota src={pizza} alt="Macarrão" />
        <Border>
          <CardTitle>
            <h3>Pizza Marguerita</h3>
            <span>
              <img src={nota} alt="avaliação" />
            </span>
          </CardTitle>
          <Description>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </Description>
          <Link to="/LaDolceVita">
            <Button>Adicionar ao Carrinho</Button>
          </Link>
        </Border>
      </Card>
    </div>
  );
};

export default LaDolceVita;
