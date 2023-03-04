import client from "./client";

export const actualizarViaje = async (id, viaje) => {
  const url = `/viajes/${id}`;
  const data = { ...viaje };

  try {
    const response = await client.put(url, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
