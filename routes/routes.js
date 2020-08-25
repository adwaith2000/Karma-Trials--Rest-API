module.exports = app => {
    const Author = require("../controllers/author.controller.js");
    const Book = require("../controllers/book.controller.js");
    const Review = require("../controllers/review.controller.js");
  
  
    // Create a new Author
    app.post("/author", Author.create);
  
    // Retrieve all Authors
    app.get("/author", Author.findAll);
  
    // Retrieve a single Author with authorId
    app.get("/author/:authorid", Author.findOne);
  
    // Update author with authorId
    app.put("/author/:authorid", Author.update);
  
    // Delete author with authoeId
    app.delete("/author/:authorid", Author.delete);

    // Create a new book
    app.post("/book", Book.create);
  
    // Retrieve all books
    app.get("/book", Book.findAll);
  
    // Retrieve a single book with bookId
    app.get("/book/:bookid", Book.findOne);
   // Retrieve a single book with authorId
    app.get("/book?authorID=x", Book.findOnep);
  
    // Update book with bookId
    app.put("/book/:bookid", Book.update);
  
    // Delete book with bookId
    app.delete("/book/:bookid", Book.delete);
  
    // Create a new review
    app.post("/review", Review.create);  
    // Retrieve all reviews
    app.get("/review", Review.findAll);
      
    // Retrieve a single book with bookId
    app.get("/review/:reviewid", Review.findOne);
   
    // Retrieve a single book with authorId
    app.get("/review?bookID=x", Review.findOnep);
      
    // Update book with bookId
    app.put("/review/:reviewid", Review.update);
      
    // Delete review with bookId
    app.delete("/review/:reviewid", Review.delete);
  };