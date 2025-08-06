const express = require("express");
const router = express.Router();
const readerController = require("../controllers/readerController");
const returnCheck = require("../middlewares/returnCheckMiddleware");
const transactionLogger = require("../middlewares/transactionLogger");

router.get("/books", readerController.getAvailableBooks);
router.post(
  "/borrow/:id",
  transactionLogger("borrowed"),
  readerController.borrowBook
);
router.post(
  "/return/:id",
  returnCheck,
  transactionLogger("returned"),
  readerController.returnBook
);

module.exports = router;
