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

export const FontTitle = styled.a`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`;

export const MenuLateral = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 360px;
  background-color: #e66767;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 999;
  @media (max-width:550px){
    width: 100%;
    display: grid;
    justify-content: center;
  }
`;

export const FecharMenuBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #ffebd9;
`;

export const ListaMenu = styled.ul`
  margin-top: 50px;
  display: grid;
  gap: 20px;
`;

export const ItemMenu = styled.li`
  position: relative;
  background-color: #ffebd9;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 344px;
  height: 100px;


`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: #e66767;
  p {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const Button = styled.a`
  display: block;
  text-align: center;
  width: 320px;
  height: 24px;
  padding-top: 3px;
  color: #e66767;
  font-weight: 700;
  background-color: #ffebd9;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  @media (max-width:550px){
    width: 100%;
   
  }
`;

export const ContainerPrice = styled.p`
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 100px;
`;
export const Delete = styled.img`
  position: absolute;
  bottom: 10px;
  right: 40px;
  cursor: pointer;

`;
