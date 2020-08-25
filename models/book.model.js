const sql = require("./db.js");

// constructor
const Book= function(book) {
  this.name = book.name;
  this.authid=book.authid;
};

Book.create = (newBook, result) => {
  sql.query("INSERT INTO books SET ?", newBook, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created book: ", { id: res.insertId, ...newBook });
    result(null, { id: res.insertId, ...newBook });
  });
};

Book.findById = (bookId, result) => {
  sql.query(`SELECT * FROM books WHERE book_id = ${bookId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found book: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found book with the id
    result({ kind: "not_found" }, null);
  });
};


Book.findByauth = (authId, result) => {
  sql.query(`SELECT * FROM books WHERE auth_id = ${authId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found book: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found book with the id
    result({ kind: "not_found" }, null);
  });
};

Book.getAll = result => {
  sql.query("SELECT * FROM books", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};
Book.updateById = (id, book, result) => {
  sql.query(
    "UPDATE books SET  book_name = ?,  WHERE book_id = ?",
    [ book.name,id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found book with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated book: ", { id: id, ...book });
      result(null, { id: id, ...book });
    }
  );
};

Book.remove = (id, result) => {
  sql.query("DELETE FROM books WHERE book_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found books with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted books with id: ", id);
    result(null, res);
  });
};

module.exports = Book;