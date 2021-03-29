import {Book} from '../interfaces/Book';

let count = 0;

export function changeID(books): Book[] {
  count++;
  return books.map(book => ({
    ...book,
    id: `${book.id}_${count}`,
  }));
}
