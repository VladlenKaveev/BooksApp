import {Book} from '../interfaces/Book';
import axios, {AxiosInstance, AxiosStatic} from 'axios';
import Config from 'react-native-config';

export type BooksLoadParams = {
  page?: string | number;
  per_page?: string | number;
  search?: string;
};

export class BookService {
  private clientInstance: AxiosInstance;

  constructor(
    private client: AxiosStatic,
    private API_URL: string,
    private RELATIVE_URL: string,
  ) {
    this.clientInstance = this.client.create({
      baseURL: API_URL,
    });
  }

  public load(params?: BooksLoadParams): Promise<Book[]> {
    return this.clientInstance.get(this.RELATIVE_URL, {params});
  }
}

const bookService = new BookService(axios, Config.SEARCH_APIARY_URL, 'books');
export default bookService;
