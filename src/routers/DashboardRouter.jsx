import { Grid, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Conductores from "../components/Conductores/Conductores";
import NavBar from "../components/NavBar/NavBar";
import Pasajeros from "../components/Pasajeros/Pasajeros";
import Viajes from "../components/Viajes/Viajes";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Grid
        container
        direction="row"
        px={{ xs: 2, md: 15, xl: 50 }}
        py={{ xs: 5 }}
        spacing={2}
      >
        <Routes>
          <Route path="/conductores" element={<Conductores />} />
          <Route path="/viajes" element={<Viajes />} />
          <Route path="/pasajeros" element={<Pasajeros />} />
          <Route path="/*" element={<Conductores />} />
        </Routes>
      </Grid>
    </>
  );
};
