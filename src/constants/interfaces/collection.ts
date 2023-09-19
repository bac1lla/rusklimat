export interface CollectionRequestInterface {
  page: number;
  pageSize: number;
}

export interface CollectionResponseInterface<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}
