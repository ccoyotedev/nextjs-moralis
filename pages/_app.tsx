import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyles'
import Web3Provider from "context/Web3Context"
import Reset from 'theme/reset'
import { theme } from 'theme'

const App = ({ Component, pageProps }) => {
  return (
    <Web3Provider>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3Provider>
  );
}

export default App;