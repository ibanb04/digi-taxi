import { styled } from "@mui/material/styles";
import {
  Avatar,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  Card,
} from "@mui/material";

const StyledCard = styled(Card)({
  backgroundColor: "#0D0D0D",
  color: "#F7F7F7",
  borderRadius: "1rem",
  boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.1)",
});

const CardPasajero = ({ nombre, telefono }) => {
  return (
    <StyledCard sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar alt={nombre} src={"asds"} />}
        title={nombre}
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body2" gutterBottom>Teléfono: {telefono}</Typography>
        <Chip label="Activo" color="success" size="small" />
      </CardContent>
    </StyledCard>
  );
};

export default CardPasajero;
