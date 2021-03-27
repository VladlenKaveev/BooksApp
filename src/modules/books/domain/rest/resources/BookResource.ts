import {BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../../core/interface/httpResource';

const bookResource = new BaseRestResource(httpResource, 'books?page=');
export default bookResource;
