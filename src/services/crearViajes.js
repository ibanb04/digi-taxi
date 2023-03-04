import client from "./client";

export const crearViajes = async (origen, destino) => {
  const url = `/viajes`;
  const data = {
    pasajeroId: 1,
    conductorId: 3,
    fecha: "prueba",
    origen,
    destino,
    valor: 20000,
    estado: false,
  };

  try {
    const response = await client.post(url, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
