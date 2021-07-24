import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyles'
import Web3Provider from "context/Web3Context"
import Reset from 'theme/reset'
import { theme } from 'theme'
import { MoralisProvider } from "react-moralis";

const App = ({ Component, pageProps }) => {
  return (
    <MoralisProvider appId={process.env.MORALIS_APPLICATION_ID} serverUrl={process.env.MORALIS_SERVER_ID}>
      <Web3Provider>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Web3Provider>
    </MoralisProvider>
  );
}

export default App;