import {BaseRepository} from '@snap-alex/domain-js';
import bookResource from '../resources/BookResource';
import {Book} from '../../interfaces/Book';

export class BookRepository extends BaseRepository<Book> {
  public async get(page: string): Promise<Book> {
    return this.resource().get(page, {contentType: 'form-data'});
  }
}

const bookRepository = new BookRepository(bookResource);
export default bookRepository;
