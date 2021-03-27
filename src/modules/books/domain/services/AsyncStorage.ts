import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
  constructor(private client: typeof AsyncStorage) {}

  public storeData(key: string, value: any): Promise<any> {
    const stringifyValue = JSON.stringify(value);
    return this.client.setItem(key, stringifyValue).then(() => value);
  }

  public getData(key: string): Promise<any> {
    return this.client.getItem(key).then(stringifyValue => {
      if (stringifyValue != null) {
        return JSON.parse(stringifyValue);
      }
      return null;
    });
  }
}

const storageService = new StorageService(AsyncStorage);
export default storageService;

// export const addData = async (key: string, value: any) => {
//   try {
//     const data = await AsyncStorage.getItem(key);
//     if (data !== null) {
//       await AsyncStorage.setItem(key, JSON.stringify([...data, value]));
//     } else {
//       await AsyncStorage.setItem(key, JSON.stringify([value]));
//     }
//   } catch (e) {
//     Alert.alert(e);
//   }
// };
//
// export const storeData = async (key: string, value: any) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//   } catch (e) {
//     console.log(e);
//     return e;
//   }
// };
//
// export const getData = async (key: string) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(key);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     Alert.alert(e);
//   }
// };
