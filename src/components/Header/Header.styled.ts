import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  color: ${({ theme }) => theme.main};

  & .nav__list {
    display: flex;
    column-gap: 20px;
  }
`;
