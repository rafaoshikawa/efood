import styled from "styled-components";

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
  @media (max-width: 550px) {
    width: 100%;
    display: grid;
    justify-content: center;
  }
`;

export const ListaMenu = styled.ul`
  display: grid;
  gap: 10px;
  color: #ffebd9;
  h4{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
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

  @media (max-width: 550px) {
    width: 100%;
  }
`;
