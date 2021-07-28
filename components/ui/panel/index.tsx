import { styled } from 'theme';

export const Panel = styled.div`
  background-color: ${({ theme }) => theme.colors.light1};
  padding: 4rem;
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`