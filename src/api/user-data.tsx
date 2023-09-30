import { API_URL } from "@env";
import axios from "axios";

const API_BASE_URL = API_URL;

export const getUserData = async (id: number) => {
  try {
    const url = `${API_BASE_URL}users/${id}/`;

    const response = await axios.get(url);
    return response.data;

  } catch (err) {
    console.log(err);
  }

  return null;
};

export const updateUserData = async (id: number, data) => {
  try {
    const idStr = id.toString();
    const url = API_BASE_URL + "users/" + idStr + "/";
    console.log(`Updating account information in route ${url}
New account info:
	first_name: ${data.first_name}
	email: ${data.email}
	phone_number: ${data.phone_number}`);
    return true;
  } catch (err) {
    console.log(err);
  }

  return null;
};
