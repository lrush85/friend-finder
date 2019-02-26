
// Dependencies
var express = require("express");
var app = express();


//Router
app.use(require('./app/routing/htmlRoutes'));
app.use(require('./app/routing/apiRoutes'));


// Establish the port
var PORT = process.env.port || 8080;



//Sets up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());







// Runs server
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
 });
