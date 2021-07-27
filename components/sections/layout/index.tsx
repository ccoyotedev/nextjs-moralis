import React, { useEffect, useState } from 'react'
import { Footer, Header } from 'components/sections'
import { Container } from 'components/layout'
import { updateNetworkId, useWeb3 } from 'context/Web3Context'
import { useMoralis } from 'react-moralis'
import { ErrorModal } from 'components/ui'

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  const { web3, isWeb3Enabled, web3EnableError, enableWeb3 } = useMoralis();
  const { state: {error} , dispatch } = useWeb3();

  const handleCloseErrorModal = () => {
    dispatch({
      type: "SET_ERROR",
      error: undefined,
    })
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateNetworkId(dispatch, web3);
    } else {
      enableWeb3();
    }
  }, [isWeb3Enabled, web3])

  return (
    <>
      {(error || web3EnableError) && <ErrorModal error={error || web3EnableError} onHandleClose={handleCloseErrorModal} />}
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}
