import { Box, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import Login from "./Login";
import logo from "../../assets/logo-dark.svg";
export const AuthLayout = ({ title = "Login" }) => {
  const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: 4,
        animation: `${fadeIn} 1s backwards`,
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <RouterLink to="/">
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
              alt="Colegio Creciendo"
              src={logo}
            />
          </RouterLink>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {title}
          </Typography>
        </Grid>
        <Login />
      </Grid>
    </Grid>
  );
};
