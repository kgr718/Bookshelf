const shelf = document.querySelector("#shelf");
const bookshelf = new Bookshelf(); //creates a new instance of bookshelf that accesses this book-data
for (const bookInfo of bookData){
    const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
    );
    bookshelf.addBook(book);
}
shelf.append(bookshelf.render());