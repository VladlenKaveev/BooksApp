import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';
import {BaseResource, BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../core/infrastructure/httpResource';
import {AuthCredentials} from '../interfaces/AuthCredentials';
import {AuthResponse} from '../interfaces/AuthResponse';
import authResource from '../resources/AuthResource';

export class AuthService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
    private httpResource: BaseResource,
    private authResource: BaseRestResource,
  ) {}

  public async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await this.createAuthResponse(credentials).then(
      payload => {
        return payload;
      },
    );
    await this.setAuthHeader(response.access_token);
    this.storeUserInfo(response.access_token);
    return response;
  }

  public logout(): Promise<void> {
    return this.clearStoredSession();
  }

  public checkLogin(): Promise<AuthResponse | null> {
    //дописать
    return this.extractUserInfo();
  }

  public async createAuthResponse(credentials: AuthCredentials): Promise<any> {
    const access_token = await this.getToken(credentials).then(payload => {
      return payload;
    });
    return {
      credentials: credentials,
      access_token: access_token,
    };
  }

  private getToken(credentials: AuthCredentials): Promise<string> {
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

  private extractUserInfo(): Promise<any> {
    return this.storageService.getData(this.storageKey);
  }

  private storeUserInfo(value: any): Promise<any> {
    return this.storageService.storeData(this.storageKey, value);
  }
}

const authService = new AuthService(
  '@auth',
  storageService,
  httpResource,
  authResource,
);
export default authService;
