import { useContext, useState, createContext } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  errorMessage: "",
});

const RICK_AND_MORTY_LOGIN = "RICK_AND_MORTY_LOGIN";
export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(() =>
      JSON.parse(localStorage.getItem(RICK_AND_MORTY_LOGIN)) ?? null
    );
    const [errorMessage, setErrorMessage] = useState(null)
    function login(user) {
        if (
            user.name === "prueba" &&
            user.email === "prueba@gmail.com" &&
            user.password === "12345"
        ) {
            localStorage.setItem(RICK_AND_MORTY_LOGIN, JSON.stringify({...user,role:0}))
            setUser({...user,role:0});
            setErrorMessage(null)
        }
        setErrorMessage("Los datos introducidos no son correctos")
    }

    function logout() {
        localStorage.removeItem(RICK_AND_MORTY_LOGIN);
        setUser(null)
    }

    const value = {
        user,
        login,
        logout,
        errorMessage,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext)
}

