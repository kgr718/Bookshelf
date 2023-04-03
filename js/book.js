class Book { // creates aclass that is then rendered n to the screne as a listed item element using DOM
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }

    render() {
        const li = document.createElement("li");
        li.textContent = this.title; // uses the title as the text content
        return li;
    }
}

