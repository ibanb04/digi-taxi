import React, { useState } from "react";
import CardPasajero from "./CardPasajero";
import Input from "../../helpers/Input";
import { CircularProgress, Grid, Typography } from "@mui/material";
import usePasajeros from "../../services/getPasajeros";
import CrearPasajero from "./CrearPasajero";

const Pasajeros = () => {
  const { data: listaDeTaxistas, isLoading } = usePasajeros();
  const [loading, setLoading] = useState(false);
  const [nombreFiltro, setNombreFiltro] = useState("");

  const handleSearch = (event) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setNombreFiltro(event.target.value);
  };

  const pasaeros =
    !isLoading &&
    listaDeTaxistas.filter((p) =>
      p.nombre.toLowerCase().includes(nombreFiltro.toLowerCase())
    );

  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="secondary"
          fontFamily="Inter,"
          gutterBottom
        >
          Pasajeros
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <Input
          placeholder="Buscar Pasajero, por nombre o apellido"
          value={nombreFiltro}
          handleSearch={handleSearch}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <CrearPasajero />
      </Grid>

      {isLoading || loading ? (
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: 10 }}
        >
          <CircularProgress color="secondary" />
        </Grid>
      ) : (
        <Grid item xs={12} m>
          <Grid container spacing={2}>
            {pasaeros.map((pasajero, index) => (
              <Grid item xs={12} key={index} sm={6} md={4}>
                <CardPasajero {...pasajero} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Pasajeros;
