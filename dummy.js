const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123my456sql',
  database: 'restful_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all AUTHORS
app.get('/author',(req, res) => {
  let sql = "SELECT * FROM AUTHORS";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single AUTHOR
app.get('/author/:authorid',(req, res) => {
  let sql = "SELECT * AUTHORS WHERE AUTH_ID="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new AUTHOR
app.post('/author',(req, res) => {
  let data = {AUTH_NAME: req.body.author_name, AUTH_ID: req.params.id};
  let sql = "INSERT INTO AUTHORS SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update author
app.put('/author/:authorid',(req, res) => {
  let sql = "UPDATE AUTHORS SET AUTH_NAME='"+req.body.author_name+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete author
app.delete('/author/:authorid',(req, res) => {
  let sql = "DELETE FROM AUTHORS WHERE AUTH_ID="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//show all books
app.get('/book',(req, res) => {
  let sql = "SELECT * FROM books";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single book
app.get('/book/:bookid',(req, res) => {
  let sql = "SELECT * FROM books WHERE book_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

// show all books by an author
app.get('book?authorID=x',(req, res) => {
  let sql = "SELECT * FROM books WHERE authid="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
//add new AUTHOR
app.post('/author',(req, res) => {
  let data = {AUTH_NAME: req.body.author_name, AUTH_ID: req.params.id};
  let sql = "INSERT INTO AUTHORS SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update author
app.put('/author/:authorid',(req, res) => {
  let sql = "UPDATE AUTHORS SET AUTH_NAME='"+req.body.author_name+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete author
app.delete('/author/:authorid',(req, res) => {
  let sql = "DELETE FROM AUTHORS WHERE AUTH_ID="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//show all AUTHORS
app.get('/author',(req, res) => {
  let sql = "SELECT * FROM AUTHORS";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single AUTHOR
app.get('/author/:authorid',(req, res) => {
  let sql = "SELECT * AUTHORS WHERE AUTH_ID="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new AUTHOR
app.post('/author',(req, res) => {
  let data = {AUTH_NAME: req.body.author_name, AUTH_ID: req.params.id};
  let sql = "INSERT INTO AUTHORS SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update author
app.put('/author/:authorid',(req, res) => {
  let sql = "UPDATE AUTHORS SET AUTH_NAME='"+req.body.author_name+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete author
app.delete('/author/:authorid',(req, res) => {
  let sql = "DELETE FROM AUTHORS WHERE AUTH_ID="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
