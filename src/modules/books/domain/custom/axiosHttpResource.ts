import axios from 'axios';
import Config from 'react-native-config';

const axiosHttpResource = (resource: string) => {
  //search config
  return axios.get(Config.SEARCH_APIARY_URL + resource);
};

export default axiosHttpResource;
