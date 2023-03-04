import { styled } from "@mui/material/styles";
import {
  Avatar,
  CardContent,
  CardHeader,
  Chip,
  Rating,
  Typography,
  Card,
} from "@mui/material";
import { useEffect, useState } from "react";
import { calcularDistancia } from "../../helpers/calcularDistancia";

const StyledCard = styled(Card)({
  backgroundColor: "#0D0D0D",
  color: "#F7F7F7",
  borderRadius: "1rem",
  boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.1)",
});

const StyledSubtitle = styled(Typography)({
  color: "#8F8F8F",
  fontWeight: 500,
  marginBottom: "1rem",
});

const CardConductor = ({
  nombre,
  avatar,
  descripcion,
  telefono,
  cedula,
  rating,
  disponible,
  lat,
  lng,
  userLat,
  userLng,
}) => {
  const [distancia, setdistancia] = useState(0);
  useEffect(() => {
    setdistancia(calcularDistancia(userLat, userLng, lat, lng));
  }, [lat, lng, userLat, userLng]);

  return (
    <StyledCard sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar alt={nombre} src={avatar} />}
        title={nombre}
        subheader={<StyledSubtitle variant="body2">{cedula}</StyledSubtitle>}
        action={<Rating name="read-only" value={rating} readOnly />}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body2">{descripcion}</Typography>
        <Typography variant="body2">Teléfono: {telefono}</Typography>
        <Typography variant="body2">lat: {lat}</Typography>
        <Typography variant="body2">lng: {lng}</Typography>
        <Typography variant="body2" mb={2}>
          Distancia: {distancia} km
        </Typography>
        <Chip
          label={disponible ? "Disponible" : "No disponible"}
          color={disponible ? "success" : "error"}
          size="small"
        />
      </CardContent>
    </StyledCard>
  );
};

export default CardConductor;
