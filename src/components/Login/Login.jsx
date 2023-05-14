import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { TextField, Box, Button, Typography, Checkbox, Alert } from "@mui/material";
export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [clicked, setClicked] = useState(false)
  const { login, errorMessage } = useAuthContext();
  function handleInpust(e) {
    setUser((currentUser) => ({
      ...currentUser,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <Typography variant="h5" sx={{ mr: 16, mt: 16, textAlign: "center" }}>
        Inicia Sesión
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          mr: 16,
          border: "1px solid grey",
          borderRadius: 2,
        }}
      >
        <TextField
          placeholder="Introduce tu nombre"
          label="Name"
          onChange={handleInpust}
          value={user.name}
          name="name"
          size="small"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          size="small"
          onChange={handleInpust}
          value={user.email}
          name="email"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          size="small"
          onChange={handleInpust}
          value={user.password}
          name="password"
          sx={{ mb: 2 }}
        />
        <span>
          Recordar contraseña <Checkbox defaultChecked />
        </span>
        <Button onClick={() => { setClicked(true); login(user);}} variant="contained" sx={{ mb: 2 }}>
          Login
        </Button>
        {errorMessage && clicked &&(
          <Alert variant="filled" severity="error">
            {errorMessage}
          </Alert>
        )}
      </Box>
    </>
  );
}
