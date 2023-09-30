import AsyncStorage from "@react-native-async-storage/async-storage";
import { encode } from "base-64";
import { api } from "./config";

const saveData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const performLogin = async (
  email: string,
  password: string
): Promise<void> => {
  if (!global.btoa) {
    global.btoa = encode;
  }

  try {
    const response = await api.post("auth/login/", {}, {
        auth: {
          username: email,
          password: password,
        },
      }
    );

    await saveData("token", response.data.token);
    return true;

  } catch (err) {
    console.log(err);
  }
};
