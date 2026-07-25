# Book List App

A simple JavaScript application for managing a list of books. Users can add books, remove them, and the data persists using the browser's Local Storage.

## Features

- Add a new book
- Display all saved books
- Delete a book
- Persist data using Local Storage
- Object-Oriented JavaScript (ES6 Classes)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

## Concepts Practiced

This project helped me practice:

- ES6 Classes
- Constructors
- Static methods
- Creating objects with `new`
- DOM Manipulation
- Event Listeners
- Local Storage
- `JSON.stringify()`
- `JSON.parse()`
- Array methods like `forEach()` and `splice()`
- Separation of Concerns (Book, UI, and Store classes)

## Project Structure

### Book Class
Responsible for creating book objects.

```javascript
new Book(title, author, isbn);
```

### UI Class
Responsible for updating the user interface.

Functions include:

- Display books
- Add a book to the table
- Delete a book from the table
- Clear input fields

### Store Class
Responsible for interacting with Local Storage.

Functions include:

- Get saved books
- Save a book
- Remove a book

## Learning Outcomes

Through this project I learned:

- Why classes can represent objects (Book) or organize related functionality (UI and Store).
- The importance of separating responsibilities in an application.
- The difference between updating the UI and updating stored data.
- How Local Storage persists data even after refreshing the browser.
- Why `JSON.stringify()` and `JSON.parse()` are necessary when working with Local Storage.

## Future Improvements

- Edit existing books
- Search books
- Prevent duplicate ISBNs

## Author

Built while learning JavaScript and Object-Oriented Programming.
