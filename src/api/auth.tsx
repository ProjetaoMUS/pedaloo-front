import { encode } from "base-64";
import { api } from "./config";
import { saveData } from "./local-storage";

export const performLogin = async (
  email: string,
  password: string
): Promise<void> => {
  if (!global.btoa) {
    global.btoa = encode;
  }

  try {
    const url = `${API_BASE_URL}auth/login/`;
    const response = await axios.post(
      url,
      {},
      {
        auth: {
          username: email,
          password: password,
        },
      }
    );

    await saveData("token", response.data.token);
    return response.data;

  } catch (err) {
    console.log(err);
  }
};
