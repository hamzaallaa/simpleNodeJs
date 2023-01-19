const express = require("express");
const router = express.Router();
const indexControlles = require("../controller/index.js");
const indexMiddlewares = require("../middlewares");
router.post("/test/",indexMiddlewares.verify,indexControlles.test);
module.exports = router;
