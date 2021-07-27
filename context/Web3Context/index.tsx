import React, { createContext, useReducer, useContext } from "react";
import { State, initialState } from "./initialState";
import { Action, reducer } from "./reducer";

const Web3Context = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const updateNetworkId = async (dispatch: React.Dispatch<Action>, web3: any) => {
  dispatch({ type: "START_ASYNC" });
  try {
    const networkId = await web3.eth.net.getId();
    dispatch({ type: "SET_NETWORK_ID", networkId });
    dispatch({ type: "END_ASYNC" });
  } catch (error) {
    dispatch({ type: "SET_ERROR", error })
  }
}

const Web3ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3 = () => useContext(Web3Context);

export default Web3ContextProvider;
export { useWeb3, updateNetworkId };
