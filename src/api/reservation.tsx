import { api } from "./config";
import { iReservation } from "../types/resrevation";

export const makeReservation = async (data: iReservation) => {
  try {
    const response = await api.get(`reservation/`);
    return response.data;

  } catch (err) {
    console.log(err);
  }

  return null;
};