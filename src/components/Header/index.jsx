import logo from "../../assets/images/logo.png";
import fundo from "../../assets/images/fundo.png";

import { Imagem, FontTitle } from "./style";
function Header() {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <a href="/"><img src={logo} alt="logo" /></a>
        <FontTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </FontTitle>
      </div>
    </Imagem>
  );
}

export default Header;
