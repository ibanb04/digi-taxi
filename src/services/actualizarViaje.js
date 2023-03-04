import client from "./client";

export const actualizarViaje = async (id, viaje) => {
  const url = `/viajes/${id}`;
  try {
    const response = await client.put(url, viaje);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
