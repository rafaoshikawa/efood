import styled from "styled-components";

export const Grid = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
export const Card = styled.div`
  width: 472px;
  background-color: #ffffff;

  img {
    display: block;
  }
`;
export const Border = styled.div`
  border-left: 3px solid #e66767;
  border-bottom: 3px solid #e66767;
  border-right: 3px solid #e66767;
`;
export const CardTitle = styled.div`
  padding: 16px 8px 0px 8px;
  display: flex;
  justify-content: space-between;
  color: #e66767;
`;
export const Description = styled.p`
  padding: 0px 8px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e66767;
`;
export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 50px;
  color: #ffebd9;
  font-weight: 700;
  background-color: #e66767;
  margin: 16px 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e6676797;
  }
`;
