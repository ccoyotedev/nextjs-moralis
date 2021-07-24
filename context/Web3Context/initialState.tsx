export interface State {
  web3: any;
  loading: boolean;
  error?: any;
  networkId?: number;
}

export const initialState: State = {
  web3: undefined,
  loading: false,
}