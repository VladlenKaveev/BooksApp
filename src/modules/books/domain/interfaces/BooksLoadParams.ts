export interface BooksLoadParams {
  search?: SearchText;
  page: number;
  per_page: number;
}

export type SearchText = {
  searchText: string;
};
