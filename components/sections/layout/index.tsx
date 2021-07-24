import React, { useEffect } from 'react'
import { Footer, Header } from 'components/sections'
import { Container } from 'components/layout'
import { updateWeb3, useWeb3 } from 'context/Web3Context'
import { useMoralis } from 'hooks/useMoralis'

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const { Moralis } = useMoralis();
  const { state: { web3 }, dispatch } = useWeb3();

  useEffect(() => {
    if (web3 === undefined) {
      console.log(dispatch);
      updateWeb3(dispatch, Moralis);
    }
  }, [web3])

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}
