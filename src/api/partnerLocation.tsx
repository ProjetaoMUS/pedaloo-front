import axios from 'axios';
import { encode } from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = "YOUR_SERVER_ADDRESS_HERE";

export const getPartnerLocations = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}api/partner_location/`,
    );

    // Async Storage

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
