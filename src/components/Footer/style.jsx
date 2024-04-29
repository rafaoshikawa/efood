import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffebd9;
  width: 100%;
  height: 298px;
  padding-top: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    height: 400px;
  }
`;
export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
export const FontText = styled.p`
  color: #e66767;
  font-size: 10px;
  font-weight: 400;
  margin-top: 80px;
  margin-bottom: 20px;
  max-width: 480px;
  @media (max-width: 600px) {
    max-width: 50ch;
    margin-top: 0px;
  }
`;
