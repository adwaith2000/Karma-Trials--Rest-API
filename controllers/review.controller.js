const Review = require("../models/review.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a review
    const review = new review({
      name: req.body.name,
      id:req.body.id,
      content:req.body.content
    });
  
    // Save review in the database
    Review.create(review, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the review."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Review.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Review.findById(req.params.reviewId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found review with id ${req.params.reviewId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving review with id " + req.params.reviewId
          });
        }
      } else res.send(data);
    });
  };

  exports.findOnep = (req, res) => {
    Review.findById(req.params.bookId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found review with bookid ${req.params.bookId}.`
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
              message: `Not found review with id ${req.params.bookId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating review with id " + req.params.bookId
            });
          }
        } else res.send(data);
      }
    );
  };

  exports.delete = (req, res) => {
    Review.remove(req.params.reviewId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found review with id ${req.params.reviewId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete review with id " + req.params.reviewId
          });
        }
      } else res.send({ message: `review was deleted successfully!` });
    });
  };