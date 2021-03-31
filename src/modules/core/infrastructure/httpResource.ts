import {FetchResource} from '@snap-alex/domain-js';
import fetch from 'cross-fetch';
import Config from 'react-native-config';

const httpResource = new FetchResource(
  Config.APIARY_URL,
  {
    trailingSlash: false,
  },
  fetch,
);

export default httpResource;
