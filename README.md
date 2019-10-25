# FriendFinder
For UW Coding Bootcamp 
* 13-Week 02-Homework
* Lead Developer:  Candice Chin
* https://candicechin.com

## Technologies Used
JavaScript, jQuery, Express Server and to handle routing, Heroku deployment, Express and Path npm packages, node.JS, Git, GitHub, HTML, Bootstrap

## Overview of App 
This app provides a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Original Instructions
* Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
* Your server.js file should require the basic npm packages we've used in class: express and path.
* Your htmlRoutes.js file should include two routes:
    * A GET Route to /survey which should display the survey page.
    * A default, catch-all route that leads to home.html which displays the home page.
* Your apiRoutes.js file should contain two routes:
    * A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    * A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
* You should save your application's data inside of app/data/friends.js as an array of objects. 
Determine the user's most compatible friend using the following as a guide:
* Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
* With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
* Example:
    * User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    * User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    * Total Difference: 2 + 1 + 2 = 5
* Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
* The closest match will be the user with the least amount of difference.
* Once you've found the current user's most compatible friend, display the result as a modal pop-up.
* The modal should display both the name and picture of the closest match.

## Link to Deployed Version of App
https://github.com/cchin1/FriendFinder
https://git.heroku.com/warm-journey-30185.git

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.