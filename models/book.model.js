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

Author.findById = (authorId, result) => {
  sql.query(`SELECT * FROM AUTHORS WHERE AUTH_ID = ${authorId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Author: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Author with the id
    result({ kind: "not_found" }, null);
  });
};

Author.getAll = result => {
  sql.query("SELECT * FROM AUTHORS", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Authors: ", res);
    result(null, res);
  });
};

Author.updateById = (id, author, result) => {
  sql.query(
    "UPDATE AUTHORS SET  AUTH_NAME = ?,  WHERE AUTH_ID = ?",
    [ author.name,id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Author with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Author: ", { id: id, ...Author });
      result(null, { id: id, ...Author });
    }
  );
};

Author.remove = (id, result) => {
  sql.query("DELETE FROM AUTHORS WHERE AUTH_ID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Author with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Author with id: ", id);
    result(null, res);
  });
};

module.exports = Author;