import { api } from "./config";

export const getPartnerLocations = async () => {
  try {
    const response = await api.get("partner_location/");

    // Async Storage

    return response.data;

  } catch (err) {
    console.log(err);
    throw err;
  }
};
