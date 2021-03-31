import {BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../../core/infrastructure/httpResource';

const bookResource = new BaseRestResource(httpResource, 'books');
export default bookResource;
