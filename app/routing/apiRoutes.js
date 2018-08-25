// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js")
var friendsArray = require("../data/friends.js")
var path = require('path')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {

        // var newFriend = req.body;
        // var comparisonResults = [];
        // var sortedResults = [];
        // var bestFriendIndex;
        // var difference;

        // for (var i = 0; i < friendsArray.length; i++) {

        //     difference = 0;

        //     for (var j = 0; j < newFriend.scores.length; j++) {

        //         difference += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriend.scores[j]));
        //     };

        //     comparisonResults.push(difference);
        //     sortedResults.push(difference)
        // }

        // friendsArray.push(newFriend);
        // console.log(newFriend);

        // sortedResults.sort(function (a, b) { return a - b });
        // console.log(comparisonResults);
        // console.log(sortedResults);

        // bestFriendPlace = sortedResults[0];
        // console.log(bestFriendPlace);

        // for (var i = 0; i < comparisonResults.length; i++) {
        //     if (comparisonResults[i] === bestFriendPlace) {
        //         // display best friend
        //         bestFriendIndex = i;
        //         console.log(bestFriendIndex)
        //         break;
        //     }
        // }

        // console.log(friendsArray[bestFriendIndex]);

        res.json(newFriend);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

<<<<<<< HEAD
    // app.post("/api/friends", function (req, res) {
    //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //     // It will do this by sending out the value "true" have a table
    //     // req.body is available since we're using the body-parser middleware
    //     //Nested for loop within a for loop to find the difference in scores between new user and other user in friends.js 
    //     var newFriend = req.body;
    //     var comparisonResults = [];
    //     var sortedResults = [];
    //     var bestFriendIndex;
    //     var difference;

    //     for (var i = 0; i < friendsArray.length; i++) {

    //         difference = 0;

    //         for (var j = 0; j < newFriend.scores.length; j++) {

    //             difference += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriend.scores[j]));
    //         };

    //         comparisonResults.push(difference);
    //         sortedResults.push(difference)
    //     }

    //     friendsArray.push(newFriend);
    //     console.log(newFriend);

    //     sortedResults.sort(function (a, b) { return a - b });
    //     console.log(comparisonResults);
    //     console.log(sortedResults);

    //     bestFriendPlace = sortedResults[0];
    //     console.log(bestFriendPlace);

    //     for (var i = 0; i < comparisonResults.length; i++) {
    //         if (comparisonResults[i] === bestFriendPlace) {
    //             // display best friend
    //             bestFriendIndex = i;
    //             console.log(bestFriendIndex)
    //             break;
    //         }
    //     }

    //     console.log(friendsArray[bestFriendIndex]);

    // });

=======
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        //Nested for loop within a for loop to find the difference in scores between new user and other user in friends.js 
        var newFriend = req.body;
        var comparisonResults = [];
        var sortedResults = [];
        var bestFriendIndex;
        var difference;

        for (var i = 0; i < friendsArray.length; i++) {

            difference = 0;

            for (var j = 0; j < newFriend.scores.length; j++) {

                difference += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriend.scores[j]));
            };

            comparisonResults.push(difference);
            sortedResults.push(difference)
        }

        friendsArray.push(newFriend);
        console.log(newFriend);

        sortedResults.sort(function (a, b) { return a - b });
        console.log(comparisonResults);
        console.log(sortedResults);

        bestFriendPlace = sortedResults[0];
        console.log(bestFriendPlace);

        for (var i = 0; i < comparisonResults.length; i++) {
            if (comparisonResults[i] === bestFriendPlace) {
                // display best friend
                bestFriendIndex = i;
                console.log(bestFriendIndex)
                break;
            }
        }

        console.log(friendsArray[bestFriendIndex]);

    });
>>>>>>> d328b6a871ed72039247f00c8270439af8bfb676


};
