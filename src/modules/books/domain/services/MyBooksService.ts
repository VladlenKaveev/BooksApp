import storageService, {
  StorageService,
} from '../../../core/services/AsyncStorage';
import {Book} from '../interfaces/Book';

export class MyBooksService {
  constructor(
    private storageKey: string,
    private storageService: StorageService,
  ) {}

  public async delete(id: number | string): Promise<Book[]> {
    const books: Book[] = await this.load().then(payload => {
      return payload;
    });
    const filtered = books.filter(data => {
      return data.id !== id;
    });
    await this.set(filtered);
    return filtered;
  }

  public async add(book: Book | null): Promise<Book[]> {
    const books = await this.load().then(payload => {
      if (payload == null) {
        return null;
      } else {
        return payload;
      }
    });
    if (Array.isArray(books)) {
      if (book) {
        books.push(book);
      }
      await this.set(books);
    } else {
      await this.set(new Array(book));
    }
    return this.load().then(payload => {
      return payload;
    });
  }

  public loadMyBooks(): Promise<Book[]> {
    return this.load().then(function (payload) {
      return payload;
    });
  }

  private load(): Promise<Book[]> {
    return this.storageService.getData(this.storageKey);
  }

  private set(value: (Book | null)[]): Promise<Book[]> {
    return this.storageService.storeData(this.storageKey, value);
  }
}

const myBooksService = new MyBooksService('@mybooks', storageService);
export default myBooksService;
