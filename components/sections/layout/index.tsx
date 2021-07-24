import React from 'react'
import { Footer, Header } from 'components/sections'
import { Container } from 'components/layout'

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
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
