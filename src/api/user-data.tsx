import { api } from "./config";
import { DEVELOPMENT_TOKEN } from "@env";


export const getUserData = async (id: number) => {
  try {
    const response = await api.get(`users/${id}/`);
    return response.data;

  } catch (err) {
    console.log(err);
  }

  return null;
};

export const updateUserData = async (id: number, data) => {
  try {
    const response = await api.patch(`users/${id}/`, data);
    return response.data;

  } catch (err) {
    console.log(err);
  }

  return null;
};
