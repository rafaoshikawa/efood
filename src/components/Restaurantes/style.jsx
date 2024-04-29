import styled from "styled-components";

export const Card = styled.div`
  width: 472px;
  min-height: 398px; /* Altura mínima para garantir que o card tenha pelo menos essa altura */
  background-color: #ffffff;
  position: relative;
  margin-bottom: 40px;
  overflow: hidden; /* Oculta o conteúdo que excede a altura disponível */
  height: auto; /* Altura ajustável conforme o conteúdo interno */

  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 550px) {
    width: 300px;
  }
`;
export const Prato = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 550px) {
    width: 300px;
    height: 217px;
  }
`;

export const Border = styled.div`
  min-height: 183px;
  border-left: 3px solid #e66767;
  border-bottom: 3px solid #e66767;
  border-right: 3px solid #e66767;
`;
export const CardTitle = styled.div`
  padding: 8px 8px 0px 8px;
  display: flex;
  justify-content: space-between;
  color: #e66767;
`;
export const Description = styled.p`
  padding: 0px 8px;
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
  overflow: hidden; // remove barra de rolagem
  text-overflow: ellipsis; // adiciona "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 4; // Qtd de linhas
  -webkit-box-orient: vertical;
  @media (max-width: 900px) {
    height: 100%;
    overflow: hidden; // remove barra de rolagem
    text-overflow: ellipsis; // adiciona "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 12; // Qtd de linhas
    -webkit-box-orient: vertical;
  }
`;
export const Button = styled.a`
  display: block;
  width: 82px;
  height: 24px;
  color: #ffebd9;
  font-weight: 700;
  font-size: 14px;
  padding-top: 4px;
  text-align: center;
  background-color: #e66767;
  margin: 8px 0px 0px 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e6676797;
  }
  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const ContainerTag = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  color: #ffebd9;
  display: flex;
  gap: 20px;

  span {
    padding: 4px 6px;
    background-color: #e66767;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
  justify-items: center;
  max-height: auto;
  @media (max-width: 1025px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;
export const Avaliacao = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
`;
