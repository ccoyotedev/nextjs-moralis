import React, { useEffect } from 'react'
import { Footer, Header } from 'components/sections'
import { Container } from 'components/layout'
import { updateNetworkId, useWeb3 } from 'context/Web3Context'
import { useMoralis } from 'react-moralis'
import { ErrorModal } from 'components/ui'

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const { web3 } = useMoralis();
  const { state: {error} , dispatch } = useWeb3();

  useEffect(() => {
    updateNetworkId(dispatch, web3);
  }, [web3])

  console.log(error);

  return (
    <>
      {error && <ErrorModal error={error} />}
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}
