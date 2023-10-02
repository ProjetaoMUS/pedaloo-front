import { api } from "./config";
import { iReservation } from "../types/resrevation";

export const makeReservation = async (data: iReservation) => {
  try {
    const response = await api.post(`reservation/`, data);
    return response.data;

  } catch (err) {
    console.error(err);
  }

  return null;
};