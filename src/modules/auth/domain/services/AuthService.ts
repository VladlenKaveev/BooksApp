import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';
import httpResource from '../../../core/infrastructure/httpResource';
import {AccessToken} from '../interfaces/AccessToken';

export class AuthService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
  ) {}

  public async load(): Promise<any> {
    return await this.storageService.getData(this.storageKey);
  }

  public async store(value: any): Promise<any> {
    return await this.storageService.storeData(this.storageKey, value);
  }

  public async storeToken(token: AccessToken): Promise<any> {
    httpResource.setHeaders({'X-Auth': `Bearer ${token}`});
    return await this.storageService.storeData(this.storageKey, token);
  }

  public async delete(): Promise<any> {
    return await this.storageService.storeData(this.storageKey, null);
  }
}

const authService = new AuthService('@auth', storageService);
export default authService;
