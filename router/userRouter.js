const express = require("express");
const regist = require("../authentication/regist");
const login = require("../authentication/login");

const router = express.Router();

router.post("/regist", regist);
router.post("/login", login);

module.exports = router;
