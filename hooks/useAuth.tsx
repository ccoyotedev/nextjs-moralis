import { useMoralis } from "./useMoralis";

export function useAuth() {
  const { Moralis } = useMoralis();
  return {
    login: async () => {
      try {
        await Moralis?.Web3.authenticate();
      } catch (e) {
        console.error(e.message, e);
      }
    },

    logout: async () => {
      try {
        await Moralis?.User.logOut();
      } catch (e) {
        console.error(e.message, e);
      }
    },

    currentUser: () => {
      return Moralis?.User.current();
    },
  };
}