import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  margin-bottom: 80px;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
}
@media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
