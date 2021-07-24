export interface State {
  loading: boolean;
  error?: Error;
  networkId?: number;
}

export const initialState: State = {
  loading: false,
}