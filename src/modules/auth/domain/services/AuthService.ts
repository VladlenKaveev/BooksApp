import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';

export class AuthService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
  ) {}

  public async load(): Promise<any> {
    return await this.storageService.getData(this.storageKey);
  }
  public async store(value: string): Promise<any> {
    return await this.storageService.storeData(this.storageKey, value);
  }
  public async delete(): Promise<any> {
    return await this.storageService.storeData(this.storageKey, null);
  }
}

const authService = new AuthService('@auth', storageService);
export default authService;
