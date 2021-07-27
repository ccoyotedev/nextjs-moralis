import { styled } from "theme"

export const StackContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light0};
  max-height: 60rem;
  overflow-y: scroll;
  p {
    font-size: 1.4rem;
    font-family: monospace;
    color: black;
    padding: 1.6rem;
  }
`