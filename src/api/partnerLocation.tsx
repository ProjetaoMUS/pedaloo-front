import axios from 'axios';
import { encode } from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = "http://192.168.87.23:8000/";

export const getPartnerLocations = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}api/partner_location/`,
    );

    // Async Storage

    return response["data"];
  } catch (err) {
    console.log(err);
    throw err;
  }
};
