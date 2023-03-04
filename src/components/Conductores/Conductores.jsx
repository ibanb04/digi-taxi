import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import "./styles.css";

const listaDeTaxistas = [
  {
    nombre: "Juan Pérez",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 10 años de experiencia",
    telefono: "555-1234",
    email: "juan.perez@example.com",
    subtitulo: "Taxista experto",
    rating: 4.5,
    disponible: true,
  },
  {
    nombre: "María García",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 5 años de experiencia",
    telefono: "555-5678",
    email: "maria.garcia@example.com",
    subtitulo: "Taxista confiable",
    rating: 4.0,
    disponible: false,
  },
  {
    nombre: "Carlos",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 3 años de experiencia",
    telefono: "555-9012",
    email: "carlos.hernandez@example.com",
    subtitulo: "Taxista amable",
    rating: 4.2,
    disponible: true,
  },
  {
    nombre: "Laura ",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 8 años de experiencia",
    telefono: "555-3456",
    email: "laura.jimenez@example.com",
    subtitulo: "Taxista puntual",
    rating: 3.7,
    disponible: true,
  },
  {
    nombre: "Pedro ",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 2 años de experiencia",
    telefono: "555-7890",
    email: "pedro.ramirez@example.com",
    subtitulo: "Taxista eficiente",
    rating: 4.7,
    disponible: false,
  },
  {
    nombre: "Sofía Díaz",
    avatar: "/ruta/de/avatar.png",
    descripcion: "Taxista con 6 años de experiencia",
    telefono: "555-2345",
    email: "sofia.diaz@example.com",
    subtitulo: "Taxista responsable",
    rating: 4.9,
    disponible: true,
  },
];
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

const TaxistaCard = ({
  nombre,
  avatar,
  descripcion,
  telefono,
  email,
  subtitulo,
  rating,
  disponible,
}) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar src={avatar} alt={nombre} sx={{ width: 64, height: 64 }} />
        }
        title={<Typography variant="h5">{nombre}</Typography>}
        subheader={
          <StyledSubtitle variant="subtitle1">{subtitulo}</StyledSubtitle>
        }
        action={
          <Rating
            size="small"
            name={`${nombre} rating`}
            value={rating}
            precision={0.5}
            readOnly
          />
        }
      />
      <CardContent>
        <Typography variant="body1">{descripcion}</Typography>
        <Typography variant="body2">{`Teléfono: ${telefono}`}</Typography>
        <Typography variant="body2">{`Email: ${email}`}</Typography>
      </CardContent>
      <CardContent>
        {disponible ? (
          <Chip size="small" label="Disponible" color="success" />
        ) : (
          <Chip size="small" label="No disponible" color="error" />
        )}
      </CardContent>
    </StyledCard>
  );
};

const Conductores = () => {
  const [filtro, setFiltro] = useState("");

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = listaDeTaxistas.filter(
    (taxista) =>
      taxista.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      taxista.id.includes(filtro)
  );
  return (
    <>
      <Grid item xs={12}>
        <input
          placeholder="Buscar Conductor"
          className="input"
          name="text"
          type="text"
        />
      </Grid>
      <Grid item xs={12} m>
        <Grid container spacing={2}>
          {listaDeTaxistas.map((taxista) => (
            <Grid item xs={12} sm={6} md={4}>
              <TaxistaCard
                key={taxista.nombre}
                nombre={taxista.nombre}
                avatar={taxista.avatar}
                descripcion={taxista.descripcion}
                telefono={taxista.telefono}
                email={taxista.email}
                subtitulo={taxista.subtitulo}
                rating={taxista.rating}
                disponible={taxista.disponible}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Conductores;
