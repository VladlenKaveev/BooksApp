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

  // public deleteData(key: string): Promise<any> {
  //   return this.client.removeItem();
  // }
}

const storageService = new StorageService(AsyncStorage);
export default storageService;
