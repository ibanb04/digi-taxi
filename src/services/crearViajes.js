import client from "./client";
import moment from "moment/moment";

const currentDate = moment().format("YYYY-MM-DD");

export const crearViajes = async (origen, destino) => {
  const url = `/viajes`;
  const data = {
    pasajeroId: "6403b9786757a490f84ddcd7",
    conductorId: "6403b275d20083f8f1b562ed",
    fecha: currentDate,
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
