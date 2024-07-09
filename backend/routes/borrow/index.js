const express = require("express");
const BorrowController = require("../../controllers/borrowController");
const router = express.Router();

router.post("/", BorrowController.createNewBorrow);

module.exports = router;