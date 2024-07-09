const express = require("express");
const router = express.Router();

const membersRoute = require("./members");

router.get("/api", (req, res) => {
  res.status(200).json({message: "API Working!"});
})
router.use("/api/members", membersRoute);

module.exports = router;