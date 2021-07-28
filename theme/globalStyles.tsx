import { createGlobalStyle } from 'styled-components'
import { theme } from "theme"

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  html {
    font-size: 10px;
    min-height: 100vh;
  }

  body {
    font-family: ${({theme}) => theme.font.primary};
    background: ${({theme}) => `linear-gradient(155deg, ${theme.colors.dark0} 0%, ${theme.colors.dark1} 40%, ${theme.colors.dark1} 50%, ${theme.colors.dark0} 100%)`};
    height: 100%;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    font-size: inherit;
  }
  a:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }

  h1 {
    font-family: ${({theme}) => theme.font.secondary};
    font-size: ${({ theme }): string => theme.font.h1.size};
    margin-bottom: 1rem;
    line-height: ${({ theme }): string => theme.font.h1.lineHeight};
    font-weight: ${({ theme }): number => theme.font.h1.weight};
  }

  h2 {
    font-family: ${({theme}) => theme.font.secondary};
    font-size: ${({ theme }): string => theme.font.h2.size};
    margin-bottom: 1.2rem;
    line-height: ${({ theme }): string => theme.font.h2.lineHeight};
    font-weight: ${({ theme }): number => theme.font.h2.weight};
  }

  h3, .h3 {
    font-family: ${({theme}) => theme.font.secondary};
    font-size: ${({ theme }): string => theme.font.h3.size};
    margin-bottom: 1rem;
    line-height: ${({ theme }): string => theme.font.h3.lineHeight};
    font-weight: ${({ theme }): number => theme.font.h3.weight};
  }
  h4 {
    font-family: ${({theme}) => theme.font.secondary};
    font-size: ${({ theme }): string => theme.font.h4.size};
    margin-bottom: 0.9rem;
    line-height: ${({ theme }): string => theme.font.h4.lineHeight};
    font-weight: ${({ theme }): number => theme.font.h4.weight};
  }

  h5, .h5 {
    font-size: ${({ theme }): string => theme.font.h5.size};
    margin-bottom: 2.1rem;
    line-height: ${({ theme }): string => theme.font.h5.lineHeight};
    font-weight: ${({ theme }): number => theme.font.h5.weight};
  }

  address,
  p {
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({ theme }): string => theme.font.p.size};
    line-height: ${({ theme }): string => theme.font.p.lineHeight};
    font-weight: ${({ theme }): number => theme.font.p.weight};
    margin-bottom: 1.6rem;
  }

  input,
  button {
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({ theme }): string => theme.font.p.size};
    font-weight: ${({ theme }): number => theme.font.p.weight};
  }

  small {
    display: block;
    font-size: ${({ theme }): string => theme.font.small.size};
    line-height: ${({ theme }): string => theme.font.small.lineHeight};
    font-weight: ${({ theme }): number => theme.font.small.weight};
  }

  a {
    font-size: ${({ theme }): string => theme.font.p.size};
    line-height: ${({ theme }): string => theme.font.p.lineHeight};
    font-weight: ${({ theme }): number => theme.font.p.weight};
    color: ${({ theme }): string => theme.colors.primary};
    cursor: pointer;
  }

  pre {
    background-color: ${({ theme }): string => theme.colors.dark2};
    padding: 1.2rem;
    white-space: pre-wrap;
    max-height: 60rem;
    overflow-y: scroll;

    code {
      color: ${({ theme }): string => theme.colors.light1};
      line-height: 1.8rem;
    }
  }
`

export default GlobalStyle;