import { API_URL } from "@env";
import axios from "axios";

const API_BASE_URL = API_URL;

export const getPartnerLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}partner_location/`);
    
    const latitudeString = response.data.latitude;
    const longitudeString = response.data.longitude;

    const latitudeDouble = parseFloat(latitudeString);
    const longitudeDouble = parseFloat(longitudeString);

    const TreatedResponse = {
      ...response.data, 
      latitude: latitudeDouble,  
      longitude: longitudeDouble,
    };

    return TreatedResponse;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
