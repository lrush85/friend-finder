
// Dependencies
var express = require("express");
var app = express();

//Sets up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
app.use(require('./app/routing/htmlRoutes'));
app.use(require('./app/routing/apiRoutes'));


// Establish the port
var PORT = process.env.PORT || 3000;

// Runs server
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
 });
