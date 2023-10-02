import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { encode } from 'base-64';

const API_BASE_URL = "http://192.168.25.5:8000/";

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
