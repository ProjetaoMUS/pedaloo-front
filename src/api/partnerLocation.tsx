import { API_URL } from "@env";
import axios from "axios";

const API_BASE_URL = API_URL;

export const getPartnerLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}partner_location/`);

    // Async Storage

    return response["data"];
  } catch (err) {
    console.log(err);
    throw err;
  }
};
