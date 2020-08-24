const Author = require("../models/Author.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const author = new author({
      name: req.body.name
    });
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Author."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Author.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Authors."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Author.findById(req.params.authorId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Author with id ${req.params.authorId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Author with id " + req.params.authorId
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
  
    Author.updateById(
      req.params.authorId,
      new Author(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Author with id ${req.params.authorId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Author with id " + req.params.authorId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Author.remove(req.params.authorId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Author with id ${req.params.authorId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Author with id " + req.params.authorId
          });
        }
      } else res.send({ message: `Author was deleted successfully!` });
    });
  };