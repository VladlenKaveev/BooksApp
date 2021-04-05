import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';
import {BaseResource, BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../core/infrastructure/httpResource';
import {AuthCredentials} from '../interfaces/AuthCredentials';
import {UserData} from '../interfaces/UserData';
import authResource from '../resources/AuthResource';

export class AuthService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
    private httpResource: BaseResource,
    private authResource: BaseRestResource,
  ) {}

  public async login(credentials: AuthCredentials): Promise<UserData> {
    const access_token = await this.getToken(credentials).then(token => {
      return token;
    });
    this.setAuthHeader(access_token);
    const userData = {
      email: credentials.email,
      access_token: access_token,
    };
    await this.storeUserData(userData);
    return userData;
  }

  public logout(): Promise<void> {
    return this.clearStoredSession();
  }

  public checkLogin(): Promise<UserData | null> {
    return this.extractUserData();
  }

  public getToken(credentials: AuthCredentials): Promise<string> {
    return this.authResource.create(credentials).then(data => {
      return data.data.access_token;
    });
  }

  private setAuthHeader(access_token: string): void {
    this.httpResource.setHeaders({'X-Auth': `Bearer ${access_token}`});
  }

  private clearStoredSession(): Promise<void> {
    this.httpResource.clearHeaders();
    return this.storageService.storeData(this.storageKey, null);
  }

  private extractUserData(): Promise<UserData> {
    return this.storageService.getData(this.storageKey);
  }

  private storeUserData(userData: UserData): Promise<void> {
    return this.storageService.storeData(this.storageKey, userData);
  }
}

const authService = new AuthService(
  '@auth',
  storageService,
  httpResource,
  authResource,
);
export default authService;
