import styled from "styled-components";

export const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }

`;
