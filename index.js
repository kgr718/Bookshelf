const theShelf = new Bookshelf(); 

theShelf.addStack(bookData)
theShelf.sortAtoZ() //what i really wanted to do was the duey decimal system, but i didnt know how to spell it =[
theShelf.shelfStocker()

const userInput = document.querySelector(".userInput");
const searchButton = document.querySelector(".search");
const bookList = document.querySelector(".books");
// adding a click listener for the search button
searchButton.addEventListener("click", function() {
    if (userInput.value) {
        bookList.innerHTML = "";
        theShelf.search(userInput.value);
    } else {
        bookList.innerHTML ="";
        theShelf.shelfStocker();
    }
})
// lets make these books pop baybeee
function newBookForm() {
    document.getElementById("addBookPopup").style.display = "block";
}
function closeBookForm() {
    document.getElementById("addBookPopup").style.display = "none";
}
const newBookToShelf = document.querySelector(".completeBook");
const titleInput = document.getElementById("newTitle");
const authorInput = document.getElementById("newAuthor");
const subjectInput = document.getElementById("newSubject");
const languageInput = document.getElementById("newLanguage");
// add a book to the shelf
newBooktoShelf.addEventListener("click", function() {
    event.preventDefault();
    let authorArray = [authorInput.value];
    let subjectArray =[subjectInput.value];
    let bookToAdd = new Book(authorArray, languageInput.value, subjectArray, titleInput.value)
    theShelf.addBook(bookToAdd);
    bookList.innerHTML = "";
    theShelf.sortAtoZ();
    theShelf.shelfStocker();
    document.getElementById("addBookPopup").style.display = "none";

    return newBookToShelf()
})
