import logo from "../../assets/images/logo.png";
import fundo from "../../assets/images/fundo.png";

import { Imagem, FontTitle } from "./style";
function HeaderDetalhe() {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <FontTitle>Restaurantes</FontTitle>
        <a href="/"><img src={logo} alt="logo" /></a>
        <FontTitle>0 produto(s) no carrinho</FontTitle>
      </div>
    </Imagem>
  );
}

export default HeaderDetalhe;
