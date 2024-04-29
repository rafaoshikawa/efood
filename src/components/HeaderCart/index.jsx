import logo from "../../assets/images/logo.png";
import fundo from "../../assets/images/fundo.png";

import { Imagem, FontTitle } from "./style";
function HeaderCart() {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <FontTitle href="/">Restaurantes</FontTitle>
        <a href="/"><img src={logo} alt="logo" /></a>
       <a href=""><FontTitle>0 produto(s) no carrinho</FontTitle></a>
      </div>
    </Imagem>
  );
}

export default HeaderCart;
