const app = document.querySelector("#app");
const bookshelf = new Bookshelf();
for (const bookInfo of bookData){
    const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
    );
    bookshelf.addBook(book);
}
app.append(bookshelf.render());