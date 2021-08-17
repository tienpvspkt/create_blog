const { Router } = require("express");
var express = require("express");

var router = express.Router();

router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));

router.get("/", function(req, res) {
    // res.json({"message": "This is Home Page!"});

    // ejs
    res.render("test");
});

router.get("/chat", (req, res) => {
    res.render("chat");
})

router.get("/chat2", (req, res) => {
    res.render("chat2");
})

router.get("/chat3", (req, res) => {
    res.render("chat3");
})

module.exports = router;