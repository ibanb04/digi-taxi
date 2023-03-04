import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/auth/auth.slice";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const { correo, password } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ correo: email, password: pass }));
    navigate("/home");
  };

  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const handleCorreo = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            defaultValue={correo}
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            onChange={handleCorreo}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            defaultValue={password}
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            onChange={handlePass}
            fullWidth
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justifyContent="end"
          sx={{ cursor: "pointer" }}
        >
          <Typography variant="body2" color="text.secondary">
            ¿No tienes una cuenta?
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
