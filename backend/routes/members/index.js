const express = require("express");
const MembersController = require("../../controllers/membersController");
const router = express.Router();

router.post("/", MembersController.createNewMember);

module.exports = router;