import { api } from "./config";
import { encode } from "base-64";
import { saveData } from "./local-storage";

export const performLogin = async (email: string, password: string): Promise<void> => {
  if (!global.btoa) {
    global.btoa = encode;
  }

  try {
    const response = await api.post(`auth/login/`, {}, {
      auth: {
        username: email,
        password: password,
      },
    });

    await saveData("token", response.data.token);
    return response.data;

  } catch (err) {
    console.error(err);
  }
};