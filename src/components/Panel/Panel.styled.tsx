import styled from 'styled-components';

export const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.2rem;

  color: #4a4a4a;

  width: 100%;

  & div:last-child {
    display: flex;
    gap: 0.7rem;
  }
`;
