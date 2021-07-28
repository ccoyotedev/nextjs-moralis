import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyles'
import { Modal } from 'components/ui'
import Web3Provider from "context/Web3Context"
import Reset from 'theme/reset'
import { theme } from 'theme'
import { MoralisProvider } from "react-moralis";

const App = ({ Component, pageProps }) => {
  if (!process.env.MORALIS_APPLICATION_ID || !process.env.MORALIS_SERVER_ID) {
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Modal>
          <h3>Moralis App_ID and Server_ID has not been set:</h3>
          <p>
            Follow the steps on the <a href="https://docs.moralis.io/getting-started/quick-start" target="_blank">Moralis documentation</a> to create a new Moralis project.
            Then find your application's app id and server id and paste them in a root <b>.env</b> file for both <b>.env.development</b> and <b>.env.production</b> like so:
          </p>
          <pre>
            <code>
              MORALIS_APPLICATION_ID='[APP_ID]'<br/>
              MORALIS_SERVER_ID='[SERVER_ID]'
            </code>
          </pre>
        </Modal>
      </ThemeProvider>
    )
  }
  return (
    <MoralisProvider appId={process.env.MORALIS_APPLICATION_ID || ""} serverUrl={process.env.MORALIS_SERVER_ID || ""}>
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