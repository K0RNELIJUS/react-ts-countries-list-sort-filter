import styled from 'styled-components';

export const ListStyled = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;

  /* Tablet */
  @media screen and (min-width: 769px) {
    /* Uncomment for 12 posts per page */
    /* grid-template-columns: repeat(2, 1fr); */
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & li {
    list-style: none;
  }
`;
