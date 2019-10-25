// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// This server.js file should require the basic npm packages we've used in class: express and path.
// ==============================================================================

var express = require("express");
// Tells node that we are creating an "express" server
var app = express();
var path = require("path");
var bodyParser = require("body-parser");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json({ type: 'application/*+json '}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

