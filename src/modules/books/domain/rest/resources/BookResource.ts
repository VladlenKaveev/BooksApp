import {BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../../core/infrastructure/httpResource';

const bookResource = new BaseRestResource(httpResource, 'books?page='); //узнать о передаче query параметров в load() domain-js
export default bookResource;
