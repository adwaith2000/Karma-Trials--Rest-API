const sql = require("./db.js");

// constructor
const Review= function(review) {
this.content = review.content;
this.bookid=book.bookid;
};

Review.create = (newReview, result) => {
sql.query("INSERT INTO reviews SET ?", newReview, (err, res) => {
if (err) {
console.log("error: ", err);
result(err, null);
return;
}

console.log("created review: ", { id: res.insertId, ...newReview });
result(null, { id: res.insertId, ...newReview });
});
};

Review.findById = (reviewId, result) => {
sql.query(`SELECT * FROM reviews WHERE review_id = ${reviewId}`, (err, res) => {
if (err) {
console.log("error: ", err);
result(err, null);
return;
}

if (res.length) {
console.log("review: ", res[0]);
result(null, res[0]);
return;
}

// not found review with the id
result({ kind: "not_found" }, null);
});
};

Review.findBybook = (bookId, result) => {
sql.query(`SELECT * FROM reviews WHERE book_id = ${bookId}`, (err, res) => {
if (err) {
console.log("error: ", err);
result(err, null);
return;
}

if (res.length) {
console.log("found review: ", res[0]);
result(null, res[0]);
return;
}

// not found review with the id
result({ kind: "not_found" }, null);
});
};

Review.getAll = result => {
sql.query("SELECT * FROM reviews", (err, res) => {
if (err) {
console.log("error: ", err);
result(null, err);
return;
}

console.log("reviews: ", res);
result(null, res);
});
};
Review.updateById = (id, review , result) => {
sql.query(
"UPDATE reviews SET content = ?, WHERE review_id = ?",
[ review.content,id],
(err, res) => {
if (err) {
console.log("error: ", err);
result(null, err);
return;
}

if (res.affectedRows == 0) {
// not found reviews with the id
result({ kind: "not_found" }, null);
return;
}

console.log("updated review ", { id: id, ...review});
result(null, { id: id, ...review });
}
);
};

Review.remove = (id, result) => {
sql.query("DELETE FROM reviews WHERE review_id = ?", id, (err, res) => {
if (err) {
console.log("error: ", err);
result(null, err);
return;
}

if (res.affectedRows == 0) {
// not found reviews with the id
result({ kind: "not_found" }, null);
return;
}

console.log("deleted reviews with id: ", id);
result(null, res);
});
};

module.exports = Review;
