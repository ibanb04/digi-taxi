import { useState } from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  FormControlLabel,
  Switch,
} from "@mui/material";
import "./styles.css";
import { calcularDistancia } from "../../helpers/calcularDistancia";
import useConductores from "../../services/getConductores";
import CardConductor from "./CardConductores";

const Conductores = () => {
  const { data: listaDeTaxistas, isLoading } = useConductores();
  const [loading, setLoading] = useState(false);
  const [nombreFiltro, setNombreFiltro] = useState("");
  const [disponibilidadFiltro, setDisponibilidadFiltro] = useState(false);
  const [distancia, setdistancia] = useState(false);
  const userLat = 4.658383;
  const userLng = -74.093938;
  const handleSearch = (event) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setNombreFiltro(event.target.value);
  };

  const handleDistancia = (event) => {
    setdistancia(event.target.checked);
  };

  const handleChangeDisponibilidad = (event) => {
    setDisponibilidadFiltro(event.target.checked);
  };

  const taxistasFiltrados =
    !isLoading &&
    listaDeTaxistas.filter(
      (taxista) =>
        (taxista.nombre.toLowerCase().includes(nombreFiltro.toLowerCase()) ||
          taxista.id.toLowerCase().includes(nombreFiltro.toLowerCase())) &&
        (!disponibilidadFiltro || taxista.disponible) &&
        (!distancia ||
          calcularDistancia(userLat, userLng, taxista.lat, taxista.lng) < 3)
    );

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" color="secondary"gutterBottom>
          Conductores
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <input
          placeholder="Buscar Conductor, por nombre, cedula o ID"
          className="input"
          name="text"
          type="text"
          value={nombreFiltro}
          onChange={handleSearch}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        ml={{ xs: 2, md: 0 }}
        textAlign={{ xs: "start", md: "right" }}
      >
        <FormControlLabel
          label={
            <Typography variant="body2" color="secondary">
              Solo disponibles
            </Typography>
          }
          control={
            <Switch
              checked={disponibilidadFiltro}
              onChange={handleChangeDisponibilidad}
              color="secondary"
            />
          }
        />
        <FormControlLabel
          label={
            <Typography variant="body2" color="secondary">
              3 km
            </Typography>
          }
          control={
            <Switch
              checked={distancia}
              onChange={handleDistancia}
              color="secondary"
            />
          }
        />
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
            {taxistasFiltrados.map((taxista, index) => (
              <Grid item xs={12} key={index} sm={6} md={4}>
                <CardConductor
                  {...taxista}
                  userLat={userLat}
                  userLng={userLng}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Conductores;
