const express = require("express");
const router = express.Router();

const membersRoute = require("./members");
const borrowRoute = require("./borrow");

router.get("/api", (req, res) => {
  res.status(200).json({message: "API Working!"});
})
router.use("/api/members", membersRoute);
router.use("/api/borrow", borrowRoute);

module.exports = router;