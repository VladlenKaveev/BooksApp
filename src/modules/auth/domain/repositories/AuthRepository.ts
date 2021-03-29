import {BaseRepository} from '@snap-alex/domain-js';
import authResource from '../resource/AuthResource';

export class AuthRepository extends BaseRepository<any> {
  public async get(auth: string): Promise<any> {
    return this.resource().get(auth, {contentType: 'form-data'});
  }
}

const authRepository = new AuthRepository(authResource);
export default authRepository;
