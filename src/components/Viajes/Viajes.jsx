import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Input from "../../helpers/Input";

const SolicitarViaje = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la solicitud de viaje al servidor o mostrar el mensaje de confirmación
    setMensaje(
      `La solicitud de viaje desde ${origen} hasta ${destino} ha sido enviada.`
    );
    setOrigen("");
    setDestino("");
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="secondary"
          fontFamily="Inter,"
          gutterBottom
        >
          Solicitar viaje
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Input
          placeholder="Dirección de origen"
          value={origen}
          handleSearch={(event) => setOrigen(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          placeholder="Dirección de destino"
          value={destino}
          handleSearch={(event) => setDestino(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Solicitar viaje
        </Button>
      </Grid>
      {mensaje && <p>{mensaje}</p>}
    </>
  );
};

export default SolicitarViaje;
