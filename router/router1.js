const express = require("express");
const { renderHome, addUser } = require("../controler/controler1");
const router = express.Router();

router.get("/", renderHome);
router.post("/add", addUser);

module.exports = router;