import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { crearPasajero } from "../../services/crearPasajero";
import AddIcon from "@mui/icons-material/Add";

const CrearPasajero = () => {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [telefono, setTelefono] = React.useState("");

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    await crearPasajero(nombre, telefono);
    setOpen(false);
    window.location.reload();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Nuevo Pasajero
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Pasajero</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese los datos del pasajero a crear en el sistema.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre y Apellido"
            onChange={handleNombre}
            value={nombre}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="tel"
            label="Telefono"
            onChange={handleTelefono}
            value={telefono}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="outlinet" onClick={handleSubmit}>
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CrearPasajero;
