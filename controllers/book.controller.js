const Book = require("../models/book.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const book = new book({
      name: req.body.name,
      id:req.body.id
    });
  
    // Save Customer in the database
    Book.create(book, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the book."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving book."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Book.findById(req.params.bookId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.bookId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving book with id " + req.params.bookId
          });
        }
      } else res.send(data);
    });
  };

  exports.findOnep = (req, res) => {
    Book.findById(req.params.authId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with authid ${req.params.authId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving book with authid " + req.params.authId
          });
        }
      } else res.send(data);
    });
  };
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Book.updateById(
      req.params.bookId,
      new Book(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Book with id ${req.params.bookId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Book with id " + req.params.bookId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Book.remove(req.params.bookId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.bookId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete boook with id " + req.params.bookId
          });
        }
      } else res.send({ message: `book was deleted successfully!` });
    });
  };