import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
  onHandleClose?: () => void;
}

export const Modal = ({ children, onHandleClose }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Modal>
        {onHandleClose && <Styled.CloseIcon src="/assets/icons/close.svg" onClick={() => onHandleClose()} />}
        {children}
      </Styled.Modal>
    </Styled.Wrapper>
  )
}