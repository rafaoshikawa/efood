import styled from "styled-components";

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: #ffffff;
  position: relative;

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
    height: 150px;
  }
`;

export const Border = styled.div`
  height: 181px;
  border-left: 3px solid #e66767;
  border-bottom: 3px solid #e66767;
  border-right: 3px solid #e66767;
  @media (max-width: 550px) {
    height: 280px;
  }
`;
export const CardTitle = styled.div`
  padding: 8px 8px 0px 8px;
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
  display: block;
  width: 82px;
  height: 24px;
  color: #ffebd9;
  font-weight: 700;
  font-size: 14px;
  padding-top: 4px;
  text-align: center;
  background-color: #e66767;
  margin: 10px 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e6676797;
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
