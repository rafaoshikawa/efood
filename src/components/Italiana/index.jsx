import fundo from "../../assets/images/restaurantladolce.png";

import { Imagem, FontTitle, FontSubTittle, Container } from "./style";
function Italiana() {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <Container>
          <FontTitle>Italiana</FontTitle>
          <FontSubTittle>La Dolce Vitta Trattoria</FontSubTittle>
        </Container>
      </div>
    </Imagem>
  );
}

export default Italiana;
