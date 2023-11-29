import { create } from "zustand";
import { logger } from "./logger";
import { getItem, setItem } from "@/lib/localStorage";

interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState["isAuthenticated"]) => void;
  setUser: (args: AuthState["user"]) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
  user: {
    userId: '',
    firstname: '',
    lastname: '',
    street: '',
    zipcode: '',
    city: '',
    role: ''
  },
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
      },
      setUser: (user) => {
        set(() => ({ user }));
      },
    }),
    "authStore"
  )
);

const userToken = getItem("authToken");
if (userToken) {
  useAuthStore.setState({ isAuthenticated: true })
}

export default useAuthStore;
