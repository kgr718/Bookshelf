class Bookshelf {
  constructor() {
      this.shelf = [];
  }
  
  addBook(book) {
      this.shelf.push(book);
  }
//maps through the array to find cloned books in book data
  addStack(newStack) { 
      newStack.map(nextBook => {
          let builtBook = new Book(nextBook.author, nextBook.language, nextBook.subject, nextBook.title);
          this.shelf.push(builtBook)
      })
  }
  
  shelfStocker() {
      this.shelf.map((element) => document.querySelector('.books').append(element.render()))
  }
       
  sortAtoZ() {
      this.shelf.sort((a, b) => a.title.localeCompare(b.title));
      }
      
  search(query) { //active searcher
      const matchingBooks = this.shelf.filter((book) => {
          let matchTitle = book.title.toLowerCase().includes(query.toLowerCase());
          let authorString = book.author.join(' ');
          let matchAuthor = authorString.toLowerCase().includes(query.toLowerCase());
          let subjectString = book.subject.join(" ");
          let matchSubject = subjectString.toLowerCase().includes(query.toLowerCase());
          return matchTitle || matchAuthor || matchSubject;
      });
      const bookList = document.querySelector('.books');
      bookList.innerHTML = "";
      matchingBooks.forEach((book) =>{
          const bookElement = book.render();
      bookList.appendChild(bookElement);
  })
  }
  
}