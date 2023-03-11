import styled from 'styled-components';

export const LayoutStyled = styled.section`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const LayoutContainerStyled = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px 15px;

  /* Tablet */
  @media screen and (min-width: 769px) {
    padding: 20px 20px;
  }
`;
