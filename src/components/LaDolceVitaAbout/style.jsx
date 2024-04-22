import styled from "styled-components";

export const Grid = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
export const Card = styled.div`
  width: 320px;
  background-color: #e66767;
`;
export const Nota = styled.img`
  padding: 8px 8px 0px 8px;
`;
export const Border = styled.div`
  border: 3px solid #e66767;
`;
export const CardTitle = styled.div`
  padding: 16px 8px 0px 8px;
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
`;
export const Description = styled.p`
  padding: 0px 8px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
`;
export const Button = styled.a`
  display: block;
  text-align: center;
  padding: 10px 20px;
  color: #e66767;
  font-weight: 700;
  background-color: #ffebd9;
  margin: 16px 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;
