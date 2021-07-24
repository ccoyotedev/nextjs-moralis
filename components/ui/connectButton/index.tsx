import React,{ useState } from 'react';
import * as Styled from "./styles";
import { useAuth } from 'hooks/useAuth';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { smartTrim, networkIdToName } from 'utils';
import { useWeb3 } from "context/Web3Context";
import { useEffect } from 'react';

export const ConnectButton = () => {
  const { state: { networkId } } = useWeb3();
  const { currentUser, login, logout } = useAuth();
  const [ user, setUser ] = useState(currentUser());
  const [ networkName, setNetworkName ] = useState("")

  const handleLogin = async () => {
    await login();
    setUser(currentUser())
  }

  const handleLogout = async () => {
    await logout();
    setUser(currentUser())
  }

  useEffect(() => {
    if (networkId) {
      setNetworkName(networkIdToName[networkId]);
    }
  }, [networkId])

  if (!user) {
    return (
      <Styled.ConnectButton onClick={() => handleLogin()}>
        Connect
      </Styled.ConnectButton>
    )
  }
  return (
    <Styled.Button onClick={() => handleLogout()}>
      <Jazzicon diameter={26} seed={jsNumberForAddress(user.attributes.accounts[0])} />
      <Styled.ConnectedDetails>
        <p>{networkName}</p>
        <p>
          {smartTrim(user.attributes.accounts[0], 8)}
        </p>
      </Styled.ConnectedDetails>
    </Styled.Button>
  )
}