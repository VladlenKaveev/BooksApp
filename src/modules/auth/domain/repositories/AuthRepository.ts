import {BaseRepository} from '@snap-alex/domain-js';
import authResource from '../resources/AuthResource';
import {AuthCredentials} from '../interfaces/AuthCredentials';

export class AuthRepository extends BaseRepository<any> {
  public async get(auth: string): Promise<string> {
    return this.resource().get(auth, {contentType: 'form-data'});
  }

  public async create(auth: AuthCredentials): Promise<AuthCredentials> {
    return this.resource().create(auth, {contentType: 'form-data'});
  }
}

const authRepository = new AuthRepository(authResource);
export default authRepository;
