import { useQuery } from "react-query";
import client from "./client";

export const getConductores = async () => {
  const url = `/conductores`;
  const { data } = await client.get(url);
  return data;
};

export default function useConductores() {
  return useQuery(["conductores"], () => getConductores());
}
