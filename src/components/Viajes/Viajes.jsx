import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import Input from "../../helpers/Input";
import ListarViajes from "./ListarViajes";
import ListarViajesPendientes from "./ListarViajesPendientes";
import { crearViajes } from "../../services/crearViajes";

const SolicitarViaje = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isConductor, setIsConductor] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await crearViajes(origen, destino);

    if (resp.error) {
      setMensaje(resp.error);
      return;
    }
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
        Viajes
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          width="90%"
          placeholder="Dirección de origen"
          value={origen}
          handleSearch={(event) => setOrigen(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          width="90%"
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
        <FormControlLabel
          sx={{ ml: 2 }}
          label={
            <Typography variant="body2" color="secondary">
              Ver modo para conductores
            </Typography>
          }
          control={
            <Switch
              checked={isConductor}
              onChange={() => setIsConductor(!isConductor)}
              color="secondary"
            />
          }
        />
      </Grid>
      {mensaje && (
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="secondary"
            fontFamily="Inter,"
            gutterBottom
          >
            {mensaje}
          </Typography>
        </Grid>
      )}

      {isConductor ? (
        <Grid item xs={12}>
          <ListarViajesPendientes />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <ListarViajes />
        </Grid>
      )}
    </>
  );
};

export default SolicitarViaje;
