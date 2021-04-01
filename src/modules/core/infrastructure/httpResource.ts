import {FetchResource} from '@snap-alex/domain-js';
import fetch from 'cross-fetch';
import Config from 'react-native-config';

const httpResource = new FetchResource(
  Config.APIARY_URL,
  {
    headers: {
      'Content-Type': 'application/json',
    },
    trailingSlash: false,
  },
  fetch,
);

export default httpResource;
