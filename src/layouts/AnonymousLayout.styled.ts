import styled from "styled-components";

export const AnonymousLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgDM};

  & .main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
