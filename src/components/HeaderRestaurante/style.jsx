import styled from "styled-components";

export const Capa = styled.div`
  position: relative;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: hidden;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: " ";
    opacity: 0.56; //opacidade de 56%
    z-index: 1;
  }
`;

export const FontTitle = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 100;
  position: relative;
  z-index: 2;
`;

export const FontSubTittle = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 900;
  position: relative;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  position: relative;
`;
