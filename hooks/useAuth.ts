// hooks/useAuth.ts
import { useAuth0 } from "react-native-auth0";

export const useAuth = () => {
  const { authorize, clearSession, user, error, isLoading } = useAuth0();

  const login = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const clearUserSession = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  return {
    login,
    clearUserSession,
    user,
    error,
    isLoading,
  };
};
