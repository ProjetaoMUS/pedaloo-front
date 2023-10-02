import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);

  } catch (err) {
    console.log(err);
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;

  } catch (error) {
    console.log(err);
    return null;
  }
};