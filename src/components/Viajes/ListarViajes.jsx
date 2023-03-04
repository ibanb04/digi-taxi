import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip, CircularProgress, Grid } from "@mui/material";
import useViajesPasajero from "../../services/getViajes";

const ListarViajes = () => {
  const { data: viajes, loading } = useViajesPasajero();

  return (
    <>
      {loading ? (
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: 10 }}
        >
          <CircularProgress color="secondary" />
        </Grid>
      ) : (
        viajes?.map((viaje, index) => (
          <Accordion key={index} defaultExpanded={index === 0 ? true : false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>VIAJE {index + 1}</Typography>
              <Chip
                label={viaje.estado ? "Finalizado" : "Pendiente"}
                color={viaje.estado ? "success" : "warning"}
                size="small"
                sx={{ marginLeft: 2 }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Conductor: {viaje.conductor} </Typography>
              <Typography>Fecha : {viaje.fecha}</Typography>
              <Typography>Origen : {viaje.origen}</Typography>
              <Typography>Destino : {viaje.destino}</Typography>
              <Typography>Valor : ${viaje.valor}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </>
  );
};

export default ListarViajes;
