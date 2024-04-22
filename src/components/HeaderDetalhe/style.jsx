import styled from "styled-components";

export const Imagem = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 186px;
  padding-top: 40px;
  padding-bottom: 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      margin-left: 88px;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 10px;

      img {
        margin-left: 0;
      }
    }
  }
`;

export const FontTitle = styled.p`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
`;
