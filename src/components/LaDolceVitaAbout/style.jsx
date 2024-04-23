import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  margin-bottom: 20px;
`;
export const Imagem = styled.img`
  height: 175px;
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
  margin: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
