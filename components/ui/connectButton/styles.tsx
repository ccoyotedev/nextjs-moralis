import { styled } from 'theme';

export const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.light0};
  cursor: pointer;
  border: none;
  min-height: 4.4rem;
  min-width: 11.7rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: border-color 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const Button = styled(ConnectButton)`
  background-color: ${({ theme }) => theme.colors.dark2};
  color: ${({ theme }) => theme.colors.dark0};
  border-color: ${({ theme }) => theme.colors.dark0};

  &:hover {
    border-color: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const ConnectedDetails = styled.div`
  margin-left: 1.6rem;
  p {
    font-size: 1.2rem;
    text-align: right;
    margin: 0
  }
  p:last-of-type {
    color: ${({ theme }) => theme.colors.light1}
  }
`