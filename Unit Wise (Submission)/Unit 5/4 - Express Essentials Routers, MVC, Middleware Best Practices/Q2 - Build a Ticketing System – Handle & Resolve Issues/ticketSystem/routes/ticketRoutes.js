const express = require("express");
const router = express.Router();
const controller = require("../controllers/ticketController");
const validate = require("../middlewares/dataCheckMiddleware");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validate, controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.patch("/:id/resolve", controller.resolve);

module.exports = router;
