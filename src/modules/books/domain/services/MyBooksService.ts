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

  public async set(value: any): Promise<Book> {
    return await this.storageService.storeData(this.storageKey, value);
  }

  public async delete(id: number): Promise<any> {
    console.log(this.load);
    const books = await this.load().then(payload => {
      return payload;
    });
    if (Array.isArray(books)) {
      const filtered = books.filter(data => {
        return data.id !== id;
      });
      await this.set(filtered);
      return filtered;
    }
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
      await this.set(books);
    } else {
      await this.set(new Array(book));
    }
    return book;
  }
}

const myBooksService = new MyBooksService('@mybooks', storageService);
export default myBooksService;
