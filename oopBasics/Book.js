export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(title) {
    if (title === '') {
      throw new Error('Title is required');
    }
    this._title = title;
  }

  set author(author) {
    if (author === '') {
      throw new Error('Author is required');
    }
    this._author = author;
  }

  set year(year) {
    if (year < 0 || typeof year !== 'number') {
      throw new Error(
        'Year is invalid. required',
      );
    }
    this._year = year;
  }

  printInfo() {
    console.log(
      'Book: ' +
        this._title +
        ', Author: ' +
        this._author +
        ', Year: ' +
        this._year,
    );
  }

  static getOldestBookByYear(bookList) {
    return bookList.reduce(
      (oldestBook, currentBook) => {
        return oldestBook._year >=
          currentBook.year
          ? currentBook
          : oldestBook;
      },
    );
  }
}
