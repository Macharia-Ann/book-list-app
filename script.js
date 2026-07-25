class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    static displayBooks(){
        // const storedBooks = [];
        const books = Store.getBooks();
        books.forEach((book)=> UI.addBookToList(book))
    }
    static  addBookToList(book){
        const list = document.querySelector("#book-list");
        let tr = document.createElement("tr");
        tr.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>
        `;
        list.appendChild(tr);
    }
    static clearFields(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
    static deleteBook(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
    }
}

// store class to handle storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// add a book
document.querySelector("#book-form").addEventListener("submit", (e)=>{
    // prevent default behavior of submitting
    e.preventDefault();
    //get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // instantiate/create an object book
    const book = new Book(title, author, isbn);

    // add book to UI
    UI.addBookToList(book);

    //add book to store
    Store.addBook(book);

    // clear inputs
    UI.clearFields();
});
   //delete book
    document.getElementById("book-list").addEventListener("click", (e)=>{
        console.log(e.target);
        UI.deleteBook(e.target);

        Store.removeBook(
            e.target.parentElement.previousElementSibling.textContent
        )
    });
