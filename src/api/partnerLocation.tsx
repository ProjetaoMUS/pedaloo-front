import { api } from "./config";

export const getPartnerLocations = async () => {
  try {
    const url = `${API_BASE_URL}partner_location/`;
    const response = await axios.get(url);

    // Async Storage

    return response.data;

  } catch (err) {
    console.log(err);
    throw err;
  }
};
