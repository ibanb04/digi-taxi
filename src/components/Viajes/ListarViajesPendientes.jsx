import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import useViajesPasajero from "../../services/getViajes";
import { Grid, CircularProgress, Chip } from "@mui/material";
import { actualizarViaje } from "../../services/actualizarViaje";

const ListarViajesPendientes = () => {
  const [checked, setChecked] = useState([]);

  const { data: viajes, isLoading } = useViajesPasajero();
  const [check, setCheck] = useState(false);
  const handleToggle = (index, viaje) => async () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    viaje = { ...viaje, estado: !(checked.indexOf(index) !== -1) };
    await actualizarViaje(viaje.id, viaje);
    setChecked(newChecked);
    setCheck(!check);
  };

  return (
    <>
      {isLoading ? (
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: 10 }}
        >
          <CircularProgress color="secondary" />
        </Grid>
      ) : (
        <List
          dense
          sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 1 }}
        >
          {viajes.map((viaje, index) => {
            const labelId = `checkbox-list-secondary-label-${index}`;
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    disabled={viaje.estado || check}
                    onChange={handleToggle(index, viaje)}
                    checked={checked.indexOf(index) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={viaje.conductor}
                      src={`/static/images/avatar/${index + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`Viaje ${index + 1} - Origen: ${
                      viaje.origen
                    } / Destino: ${viaje.destino}`}
                  />
                  <Chip
                    label={viaje.estado || check ? "Finalizado" : "Pendiente"}
                    color={viaje.estado || check ? "success" : "warning"}
                    size="small"
                    sx={{ marginLeft: 2 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ListarViajesPendientes;
