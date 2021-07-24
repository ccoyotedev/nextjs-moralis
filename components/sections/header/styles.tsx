import { styled } from 'theme';

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark0};
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 2.4rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.dark2};

  @media ${({theme}) => theme.mediaQueries.laptop} {
    position: sticky;
    top:0;
  };
`