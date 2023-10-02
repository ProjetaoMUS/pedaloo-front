import { api } from "./config";

export const getUserData = async () => {
  try {
    const response = await api.get(`users/`);
    return response.data[0];

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
