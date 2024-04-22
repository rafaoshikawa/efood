import fundo from "../../assets/images/restauranthioki.png";

import { Imagem, FontTitle, FontSubTittle, Container } from "./style";
function Japonesa() {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <Container>
          <FontTitle>Japonesa</FontTitle>
          <FontSubTittle>Hioki Sushi</FontSubTittle>
        </Container>
      </div>
    </Imagem>
  );
}

export default Japonesa;
