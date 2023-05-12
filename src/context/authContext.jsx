import { useContext, useState, createContext } from "react";

const authContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  errorMessage: "",
});

const RICK_AND_MORTY_LOGIN = "RICK_AND_MORTY_LOGIN";
export default function authContextProvider({ children }) {
    const [user, setUser] = useState(() =>
      JSON.parse(localStorage.getItem(RICK_AND_MORTY_LOGIN)) ?? null
    );

    function login(user) {
        if (
            user.name === "estela" &&
            user.email === "estela@gmail.com" &&
            user.password === "12345"
        )
    }
}
