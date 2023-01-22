const express = require("express");
const router = express.Router();
const indexControlles = require("../controller/index.js");
const indexMiddlewares = require("../middlewares");
router.post("/test/",indexMiddlewares.verify,indexControlles.test);
router.get("/getTest/",indexMiddlewares.verify,indexControlles.getTest);
module.exports = router;
