import { useMoralis } from 'react-moralis';

export function useAuth() {
  const { authenticate, user, logout } = useMoralis();
  return {
    login: async () => {
      try {
        await authenticate();
      } catch (e) {
        console.error(e.message, e);
      }
    },

    logout: async () => {
      try {
        await logout();
      } catch (e) {
        console.error(e.message, e);
      }
    },

    currentUser: () => {
      console.log(user);
      return user;
    },
  };
}