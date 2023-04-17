// the idea is to create an evil/ rude version of barnes n noble

class Book {
    constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.allComments = [] 
    }

    render() {
        const listing = document.createElement('li');

        const binding = document.createElement('div');
        binding.classList.add('book');
        
        const infoButton = document.createElement('button')
        infoButton.textContent = 'Info';
        infoButton.classList.add('moreInfo')
        infoButton.addEventListener('click', function() {
            window.alert(`Title: ${this.title}\nAuthor: ${this.author}\nLanguage: ${this.language}\nSubject: ${this.subject}`);
        }.bind(this)); 

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = this.title;

        const bookAuthor = document.createElement('h4');
        bookAuthor.textContent = ` b. ${this.author}`;
        

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        
        const commentList = document.createElement('ul');
        commentList.classList.add('comments');
        
        
        commentButton.addEventListener('click', function(){
            let comments = prompt(`Who cares about your opinon on ${this.title}:`, '');
            if (comments == null || comments =="") {
                window.alert('Thats what I THOUGHT?')
            } else {
                comments = comments.substring(0, 280); 
                this.allComments.push(comments);
                commentList.innerHTML = '';
                this.allComments.forEach((comment) => {
                    const commentPost = document.createElement('li');
                    commentPost.textContent = comment;
                    commentList.append(commentPost)
                })
            }
        }.bind(this))
        
        

        if(this.allComments.length > 0) {
            this.allComments.forEach((comment) => {
                const commentPost = document.createElement('li');
                commentPost.textContent = comment;
                commentList.append(commentPost)
            })
        }

        binding.append(bookTitle);
        binding.append(bookAuthor);
        binding.append(infoButton)
        binding.append(commentButton);
        listing.append(binding);
        listing.append(commentList)

        return listing;

    }
}
