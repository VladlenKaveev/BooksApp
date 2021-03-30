import {FetchResource} from '@snap-alex/domain-js';
import fetch from 'cross-fetch';
import Config from 'react-native-config';
import authService from '../../auth/domain/services/AuthService';

const authToken = authService.load().then(payload => {
  return payload;
});

const httpResource = new FetchResource(
  Config.APIARY_URL,
  {
    headers: {
      'X-Auth': `Bearer ${authToken}`,
    },
  },
  fetch,
);

export default httpResource;
