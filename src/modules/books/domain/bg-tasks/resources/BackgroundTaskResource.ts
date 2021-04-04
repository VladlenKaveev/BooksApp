import {BaseRestResource} from '@snap-alex/domain-js';
import httpResource from '../../../../core/infrastructure/httpResource';

const backgroundTaskResource = new BaseRestResource(httpResource, 'tasks');
export default backgroundTaskResource;
