class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity == 0) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        let index = this.books.indexOf(bookName);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (arguments.length == 0) {
            let list = [];
            list.push(`The book collection has ${this.capacity} empty spots left.`);

            let unsorted = Object.values(this.books);
            let sorted = unsorted.sort((a, b) => {
                a.bookName - b.bookName;
            });
            sorted.forEach((el) => {
                list.push(`${el.bookName} == ${el.bookAuthor} - ${el.payed == true ? "Has Paid" : "Not Paid"}.`);
            });
            return `${list.join('\n')}`;
        } else {
            let book = this.books.find(x => x.bookAuthor == bookAuthor);
            if (book) {
                return `${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? "Has Paid" : "Not Paid"}.`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}
const library = new LibraryCollection(2);

library.addBook('In Search of Lost Time', 'Marcel Proust');

console.log(library.payBook('In Search of Lost Time'));

console.log(library.payBook('Don Quixote')); 