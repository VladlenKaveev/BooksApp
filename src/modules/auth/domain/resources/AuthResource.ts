import {BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../core/infrastructure/httpResource';

const authResource = new BaseRestResource(httpResource, 'login');
export default authResource;
