import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';
import {BaseResource} from '@snap-alex/domain-js';
import authRepository from '../repositories/AuthRepository';
import httpResource from '../../../core/infrastructure/httpResource';
import {AuthCredentials} from '../interfaces/AuthCredentials';
import {AuthResponse} from '../interfaces/AuthResponse';

export class AuthService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
    private httpResource: BaseResource,
  ) {}

  public async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const access_token = await AuthService.getToken().then(payload => {
      return payload;
    });
    const response = {
      credentials: credentials,
      access_token: access_token,
    };
    await this.setAuthHeader(access_token);
    this.store(response);
    return response;
  }

  public logout(): Promise<void> {
    return this.clearStoredSession();
  }

  public checklogin(): Promise<AuthResponse | null> {
    return this.load().then(response => {
      return response;
    });
  }

  private static getToken(): Promise<string> {
    return authRepository.load().then(data => {
      return data.access_token;
    });
  }

  private setAuthHeader(access_token: string): void {
    this.httpResource.setHeaders({'X-Auth': `Bearer ${access_token}`});
  }

  private clearStoredSession(): Promise<void> {
    this.httpResource.clearHeaders();
    return this.storageService.storeData(this.storageKey, null);
  }

  private load(): Promise<any> {
    return this.storageService.getData(this.storageKey);
  }

  private async store(value: any): Promise<any> {
    return await this.storageService.storeData(this.storageKey, value);
  }
}

const authService = new AuthService('@auth', storageService, httpResource);
export default authService;
