import React from 'react';
import * as Styled from "./styles";
import { ConnectButton } from 'components/ui';


export const Header = () => {
  return (
    <Styled.Wrapper>
      <ConnectButton />
    </Styled.Wrapper>
  )
}