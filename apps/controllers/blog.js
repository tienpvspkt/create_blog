var express = require("express");
const post = require("../models/post");
var router = express.Router();

var post_md = require("../models/post");

router.get("/", function(req, res){
    // res.json({"message": "This is Blog Page!"})

    var data = post_md.getAllPosts();

    data.then(function(posts){
        var result = {
            posts: posts,
            error: false
        };

        res.render("blog/index", {data: result});
        // console.log("thanh cong");
        // console.log(posts[1].title);
        // console.log(posts.id);
        // console.log(posts.created_at);
        // console.log(posts.length);

    }).catch(function(err){
        var result = {
            error: "Could not get posts data"
        };

        res.render("blog/index", {data: result});
    });

    // res.render("blog/index");
});

router.get("/post/:id", (req, res) => {
    var data = post_md.getPostByID(req.params.id);
    console.log(req.params);

    data.then((function (posts){
        var post = posts[0];
        // console.log(posts);

        var result = {
            post: post,
            error: false
        };

        res.render("blog/post", {data: result});
    })).catch(function(err) {
       var result = {
           error: "Could not get post detail"
       } 

       res.render("blog/post", {data: result});
    });
}) 

router.get("/about", (req, res) => {
    res.render("blog/about");
})

router.get("/contact", (req, res) => {
    res.render("blog/contact");
})


module.exports = router;