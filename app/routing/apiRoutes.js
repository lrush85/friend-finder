var express = require("express");
var app = express();
var friends = require("../data/friends");

app.get("/api/friends", function(req,res){
   res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var friend = req.body;
    console.log(friend);
    friends.push(friend);
    
    res.send('Success!');
});

module.exports = app;




