const router = require("express").Router();
const axios = require("axios")
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);
// Matches with "/api/books/:id"
router.route("/search/:query")
  .get((req, res) => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&startIndex=${0}&maxResults=10`)
      .then(books => res.json(books.data.items))
      .catch(err => res.send(err));
  });
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;