import storageService, {StorageService} from './AsyncStorage';
import {Book} from '../interfaces/Book';

export class MyBooksService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
  ) {}

  public async load(): Promise<Book> {
    return await this.storageService.getData(this.storageKey);
  }

  public async delete(id): Promise<any> {
    const books = await this.load().then(payload => {
      return payload;
    });
    //доделать
  }

  public async add(book: Book): Promise<Book> {
    const books = await this.load().then(payload => {
      if (payload == null) {
        return null;
      } else {
        return payload;
      }
    });
    // НУЖНО РЕАЛИЗОВАТЬ УСЛОВИЕ ПРИ КОТОРОМ ID КНИГ НЕ ДОЛЖНЫ БЫТЬ РАВНЫ
    if (Array.isArray(books)) {
      books.push(book);
      await this.storageService.storeData(this.storageKey, books);
    } else {
      await this.storageService.storeData(this.storageKey, new Array(book));
    }
    return book;
  }
}

const myBooksService = new MyBooksService('@mybooks', storageService);
export default myBooksService;
