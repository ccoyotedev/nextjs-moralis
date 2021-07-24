import { styled } from 'theme';
import { css } from 'styled-components';

export const ConnectButton = styled.button<{ state: "loading" | "logged_in" | "logged_out" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
  border: none;
  min-height: 4.4rem;
  min-width: 11.7rem;
  border: 1px solid ${({ theme }) => theme.colors.dark2};
  transition: all 300ms ease;
  background-color: ${({ theme }) => theme.colors.dark2};
  color: ${({ theme }) => theme.colors.dark0};

  ${({ state }) => state === "logged_in"
    ? css`
        cursor: pointer;

        &:hover {
          border-color: ${({ theme }) => theme.colors.secondary};
        }
      `
    : css`
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light0};
        &:hover {
          border-color: ${({ theme }) => theme.colors.secondary};
        }
      `
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