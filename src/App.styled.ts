import styled from "styled-components";

export const AppWrapper = styled.div`
  color: ${({ theme }) => theme.main};

  & a {
    text-decoration: none;
    color: inherit;
  }

  & img {
    display: block;
  }
  & ul {
    list-style: none;
  }
  & h1,
  h2,
  h3,
  h4,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: inherit;
  }
`;
