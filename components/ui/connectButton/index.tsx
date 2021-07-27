import React,{ useState } from 'react';
import * as Styled from "./styles";
import { useMoralis } from 'react-moralis';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { smartTrim, networkIdToName } from 'utils';
import { useWeb3 } from "context/Web3Context";
import { useEffect } from 'react';

export const ConnectButton = () => {
  const { state: { networkId, loading } } = useWeb3();
  const { authenticate, user, logout, isAuthenticated } = useMoralis();
  const [ networkName, setNetworkName ] = useState("");
  const [ openDropdown, setOpenDropdown ] = useState(false);

  const handleLogin = async () => {
    await authenticate();
  }

  const handleLogout = async () => {
    setOpenDropdown(false);
    await logout();
  }

  const handleClick = () => {
    if (!user) handleLogin();
    if (!loading && isAuthenticated) {
      setOpenDropdown(prevState => !prevState);
    }
  }

  useEffect(() => {
    if (networkId) {
      setNetworkName(networkIdToName[networkId]);
    }
  }, [networkId])

  return (
    <Styled.Wrapper>
      <Styled.Button onClick={handleClick} state={loading ? "loading" : !user ? "logged_out" : "logged_in"}>
        {loading ? "Loading" : !user ? "Connect" : (
          <>
            <Jazzicon diameter={26} seed={jsNumberForAddress(user.attributes.accounts[0])} />
            <Styled.ConnectedDetails>
              <p>{networkName}</p>
              <p>
                {smartTrim(user.attributes.accounts[0], 8)}
              </p>
            </Styled.ConnectedDetails>
          </>
        )}
      </Styled.Button>
      {openDropdown && (
        <Styled.Dropdown>
          <Styled.DropdownButton onClick={() => handleLogout()}>
            Logout
          </Styled.DropdownButton>
        </Styled.Dropdown>
      )}
    </Styled.Wrapper>
  )
}