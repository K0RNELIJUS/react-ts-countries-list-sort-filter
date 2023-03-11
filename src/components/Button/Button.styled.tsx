import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  padding: 0.5rem 1rem;
  border-radius: 0.375rem;

  font-size: 1rem;

  cursor: pointer;

  background-color: #48c78e;
  color: #fff;

  &:hover {
    background-color: #3ec487;
  }

  & span {
    margin-left: 0.5rem;
  }
`;
