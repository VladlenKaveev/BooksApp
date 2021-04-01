import {AuthCredentials} from './AuthCredentials';

export interface AuthResponse {
  credentials: AuthCredentials;
  access_token: string;
}
