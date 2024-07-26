import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/ui";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 2rem 4rem;
  }
`;
