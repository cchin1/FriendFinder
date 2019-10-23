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



// * Your survey should have 10 questions of your choosing. Each answer should be on 
// a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// * You should save your application's data inside of app/data/friends.js as an array of objects. 
// Determine the user's most compatible friend using the following as a guide:
// * Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// * Example:
//     * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//     * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
//     * Total Difference: 2 + 1 + 2 = 5
// * Remember to use the absolute value of the differences. Put another way: no 
// negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// * The closest match will be the user with the least amount of difference.
// * Once you've found the current user's most compatible friend, display the
// result as a modal pop-up.
// * The modal should display both the name and picture of the closest match.