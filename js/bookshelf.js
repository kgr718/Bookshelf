class Bookshelf {
     constructor(books = []) { //creates an array of books using books
      this.books = books;
    }

    addBook(book) {
      this.books.push(book);
    }

    render() {
      const ul = document.createElement("ul"); 

      for (const book of this.books) {
        ul.append(book.render());
      }

      return ul;
    }
}