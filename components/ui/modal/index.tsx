import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Modal>
        {children}
      </Styled.Modal>
    </Styled.Wrapper>
  )
}