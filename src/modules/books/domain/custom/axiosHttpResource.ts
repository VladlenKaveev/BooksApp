import axios from 'axios';
import Config from 'react-native-config';

let requestsCounter = 0;

const axiosHttpResource = (resource: string) => {
  requestsCounter++;
  return axios.get(Config.APIARY_URL + resource).then(books => {
    return books.map(book => {
      return {...book, id: `${book.id}_${requestsCounter}`};
    });
  });
};

export default axiosHttpResource;
