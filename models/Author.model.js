const sql = require("./db.js");

// constructor
const Author= function(author) {
  this.name = author.name;
};

Author.create = (newAuthor, result) => {
  sql.query("INSERT INTO AUTHORS SET ?", newAuthor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created author: ", { id: res.insertId, ...newAuthor });
    result(null, { id: res.insertId, ...newAuthor });
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