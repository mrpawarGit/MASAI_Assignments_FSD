const { getBookById } = require("../models/bookModel");

module.exports = (action) => {
  return (req, res, next) => {
    const id = +req.params.id;
    const book = getBookById(id);
    const readerName = req.body.readerName || book?.borrowedBy;
    if (book && readerName) {
      const now = new Date().toISOString();
      console.log(`[${now}] ${readerName} ${action} "${book.title}"`);
    }
    next();
  };
};
