import { styled } from 'theme';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index:100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.div`
  position: relative;
  top: 5.4rem;
  margin: 0 3.2rem;
  max-width: ${({theme}) => `${theme.grid.container.maxWidth.sm}px`};
  width: 100%;
  height: fit-content;
  padding: 5.6rem 3.2rem 3.2rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.light1};
  box-shadow: ${({ theme }) => theme.shadow };
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  cursor: pointer;
`


