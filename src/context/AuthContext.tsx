import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@muc/firebase";
import { useNotification } from "./Notification";
import { COLORS } from "@muc/constants";
import { CheckCircle, Close } from "@mui/icons-material";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  logOut: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { setAlert } = useNotification();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoggedIn(!!currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setIsLoggedIn(true);
      setAlert({
        message: { subTitle: "Logged in successfully" },
        show: true,
        variant: "success",
        icon: <CheckCircle style={{ color: COLORS.white.main }} />,
      });
    } catch (error) {
      setIsLoggedIn(false);
      setAlert({
        message: { subTitle: "Please use a correct email & password" },
        show: true,
        variant: "error",
        icon: <Close style={{ color: COLORS.white.main }} />,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setIsLoggedIn(false);
      setAlert({
        message: { subTitle: "You are logged out now" },
        show: true,
        variant: "warning",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut, logIn, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
