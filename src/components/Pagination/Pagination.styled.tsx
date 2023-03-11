import styled, { css } from 'styled-components';

type PaginationBtnProps = {
  isActive: boolean;
};

export const PaginationBtnStyled = styled.button<PaginationBtnProps>`
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  color: #363636;

  min-width: 37.69px;
  padding: 0.4em 0.8em;

  background-color: #fff;

  cursor: pointer;

  &:hover {
    border-color: ${({ isActive }) => !isActive && '#b5b5b5'};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #485fc7;
      border-color: #485fc7;
      color: #fff;
    `}
`;

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  align-self: center;

  padding-top: 50px;
`;
