import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

import { Container, SocialMedias, FontText } from "./style";

function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <SocialMedias>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="">
          <img src={twitter} alt="Twitter" />
        </a>
      </SocialMedias>
      <FontText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FontText>
    </Container>
  );
}

export default Footer;
