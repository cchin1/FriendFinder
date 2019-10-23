// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// Pulls in required dependencies
var path = require("path");

// Import the list of friend entries
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // Add a new friend entry
  app.post("/api/friends", function(req, res) {

    // Computing best match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    }

    console.log(req.body);

    // Here we take the result of the user's survey POST and parse it.
    var userData = req.body;
    console.log("userData = " + JSON.stringify(userData));

    var userScores = userData.scores;
    console.log("userScores = " + userScores);

    console.log(userScores);

    // This variable will calculate the difference between the user's scores and the scores of each user in the database
    var totalDifference = 10000;

    // Here we loop through all the friend possibilties in the database. This is the beginning of a nested for-loop.
    for (var i=0; i < friends.length; i++) {

        console.log(friends[i]);

        var diff = 0;

        // We then loop through all the scores of each friend
        for (var j = 0; j < friends[i].scores[j]; j++) {

            // We calculate the difference between the scores and sum them into the totalDifference
            diff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            // If the sum of differences is less than the differences of the current "best match"
            if (diff <= bestMatch.friendDifference) {

                // Reset the bestMatch to be the new friend.
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = diff;
            }
        }
    }

    // Save the user's data to the database (to hapen AFTER the check, otherwise the database will always
    // return that the user is the user's best friend).
    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json({status: "Great!", bestMatch: bestMatch});
  });

}