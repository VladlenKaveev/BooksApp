let count = 0;

export function changeID(books) {
  count++;
  return books.map(book => ({
    ...book,
    id: `${book.id}_${count}`,
  }));
}
