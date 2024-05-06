import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  margin-bottom: 100px;
`;

export const Imagem = styled.img`
  width: 320px;
  height: 167px;
  object-fit: cover;
  padding: 8px 8px 0px 8px;
`;

export const Border = styled.div`
  border: 3px solid #e66767;
`;

export const CardTitle = styled.h3`
  padding: 0px 4px 0px 4px;
  font-size: 16px;
  color: #ffebd9;
`;

export const Description = styled.p`
  padding: 0px 4px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
  overflow: hidden; // remove barra de rolagem
  text-overflow: ellipsis; // adiciona "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 4; // Qtd de linhas
  -webkit-box-orient: vertical;
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  width: 304px;
  height: 24px;
  padding-top: 3px;
  color: #e66767;
  font-weight: 700;
  background-color: #ffebd9;
  margin: 16px 4px 4px 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Estilos para o modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Transparência para um fundo escuro */
  display: flex;
  justify-content: center; /* Centralizando horizontalmente */
  align-items: center; /* Centralizando verticalmente */
  z-index: 9999;
`;

export const ModalContent = styled.div`
  display: grid;
  width: 100%;
  height: 344px;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  background-color: #e66767;
  color: #ffebd9;
  padding: 30px 30px;
  position: relative;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
  div {
    display: grid;
    p {
      max-width: 60ch;
      line-height: 22px;
      font-size: 14px;
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 10px;
    height: 100%;
    justify-items: center;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  right: 10px;
  top: 10px;
  img {
    width: 16px;
    height: 16px;
  }
`;
export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
`;
export const ButtonModal = styled.a`
  display: flex;
  text-align: center;
  width: 240px;
  height: 24px;
  align-items: center;
  justify-content: center;
  color: #e66767;
  font-weight: 700;
  background-color: #ffebd9;
  margin: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    margin: 2px;
  }
`;
