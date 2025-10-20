import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this._format = format;
  }

  get format() {
    return this._format;
  }

  set format(format) {
    if (format === '') {
      throw new Error('Format must be mentioned');
    }
    this._format = format;
  }

  printInfo() {
    console.log(
      'Book: ' +
        this._title +
        ', Author: ' +
        this._author +
        ', Year: ' +
        this._year +
        ', format: ' +
        this._format,
    );
  }

  static transformBookIntoEBook(book, format) {
    return new EBook(
      book.title,
      book.author,
      book.year,
      format,
    );
  }
}

// training with eslint - applying rules
const book = new EBook();
console.log(book);