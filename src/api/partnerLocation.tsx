import { api } from "./config";

export const getPartnerLocations = async () => {
  try {
    const response = await api.get(`partner_location/`);

    return response.data;

  } catch (err) {
    console.error(err);
    throw err;
  }
};
