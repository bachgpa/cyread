const express = require("express");
const router = express.Router();
const homeController = require("../mvc/controllers/HomeController");

router.get("/", homeController.home);

module.exports = router;
