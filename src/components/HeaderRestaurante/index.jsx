import React from "react";
import { Capa, FontTitle, FontSubTittle, Container } from "./style";

function HeaderRestaurante({ capa, titulo, tipoComida }) {
  return (
    <Capa style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <Container>
          <FontTitle>{titulo}</FontTitle>
          <FontSubTittle>{tipoComida}</FontSubTittle>
        </Container>
      </div>
    </Capa>
  );
}

export default HeaderRestaurante;
