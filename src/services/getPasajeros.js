import { useQuery } from "react-query";
import client from "./client";

export const getPasajeros = async () => {
  const url = `/pasajeros`;
  const { data } = await client.get(url);
  return data;
};

export default function usePasajeros() {
  return useQuery(["pasajeros"], () => getPasajeros());
}
