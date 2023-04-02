var express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");
var auth = require("../middleware/auth")();
router.get("/mypost", auth.authenticate(), postController.get_post);
router.get("/lookupexample", auth.authenticate(), postController.lookupExample);

module.exports = router;
