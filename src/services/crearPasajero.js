import client from "./client";

export const crearPasajero = async (nombre, telefono) => {
  const url = `/pasajeros`;
  const data = {
    nombre,
    telefono,
  };

  try {
    const response = await client.post(url, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
