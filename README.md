# Karma-Trials--Rest-API
REST API that contains Books, Authors and Reviews. <br />
Every Book has an Author. Authors can have many Books. Books can have many reviews. <br />
API is able to create, read, modify, and delete Books, Authors, and Reviews. <br />

API Routes :  <br />
GET /book - Get all Books <br />
GET /book?authorID=x - Get All Books of authorID x<br />
GET /book/:bookid - Get one Book<br />
POST /book - Create Book<br />
PUT /book/:bookid - Update Boo<br />k
DELETE /book/:bookid - Delete Book<br />
<br />
GET /author - Get all Author<br />
GET /author/:authorid - Get one Author<br />
POST /author - Create Author<br />
PUT /author/:authorid - Update Author<br />
DELETE /author/:authorid - Delete Author<br />
<br />
GET /review - Get all Review<br />
GET /review?bookId=x - Get All reviews of Book x<br />
GET /review/:reviewid - Get one Review<br />
POST /review - Create Review<br />
PUT /review/:reviewid - Update Review<br />
DELETE /review/:reviewid - Delete Review
