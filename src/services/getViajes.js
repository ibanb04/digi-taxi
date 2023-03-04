import { useQuery } from "react-query";
import client from "./client";

export const getViajesPasajero = async () => {
  const url = `/pasajeros/1/viajes`;
  const { data } = await client.get(url);
  const viaje = data.map(async (viaje, indice) => {
    const { data: conductor } = await client.get(
      `/conductores/${viaje.conductorId}`
    );
    data[indice].conductor = conductor.nombre;
  });
  await Promise.all(viaje);
  console.log(data);
  return data;
};

export default function useViajesPasajero() {
  return useQuery(["viajes pasajero"], () => getViajesPasajero());
}
