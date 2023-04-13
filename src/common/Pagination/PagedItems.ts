export class PagedItems<T> {
  public readonly page: number;
  public readonly totalPages: number;
  public readonly items: T[];

  constructor(page: number, totalPages: number, items: T[]) {
    this.page = page;
    this.totalPages = totalPages;
    this.items = items;
  }
}
