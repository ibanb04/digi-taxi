import { useQuery } from "react-query";
import client from "./client";

export const getViajesPasajero = async () => {
  const url = `/viajes/`;
  const { data } = await client.get(url);
  return data.viajes;
};

export default function useViajesPasajero() {
  return useQuery(["viajes pasajero"], () => getViajesPasajero());
}
