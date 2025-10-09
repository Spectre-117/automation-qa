import Book from "./Book.js";
import EBook from "./EBook.js";

const bookOne = new Book("Lord of the Rings", "J.R.R.Tolkien", 1954);
const bookTwo = new Book("1984", "George Orwell", 1949);
const bookThree = new Book("The Little Prince", "Antoine de Saint-Exupery", 1943);
const eBookOne = new EBook("Starship Troopers", "Robert Anson Heinlein", 1959, "FB2");

try {
    bookOne.author = "";
    bookOne.year = "dsf";
} catch (err) {
    console.log("Error: " + err);
}

try {
    eBookOne.format = "";
} catch (err) {
    console.log("Error: " + err);
}

bookOne.printInfo();
bookTwo.printInfo();
bookThree.printInfo();
eBookOne.printInfo();

console.log(Book.getOldestBookByYear([bookOne, bookTwo, bookThree, eBookOne]));

const newEBook = EBook.transformBookIntoEBook(bookOne, "PDF");
console.log(newEBook);
//console.log(newEBook.constructor.name); // check if instance of EBook