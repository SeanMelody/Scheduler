console.log("Hi")
// Access the ID #currentDay and print the current date there
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = "Today is: " + (moment().format('MMMM Do YYYY'));
// currentDay.textContent(moment().format('MMMM Do YYYY, h:mm:ss a'));
var sinceNine = document.querySelector("#sincenine")


var nine = document.querySelector("#nine").style.backgroundColor = "red";

var test = moment().format("MMMM Do YYYY");
console.log(test);

var test2 = moment().startOf('day').fromNow();
console.log(test2);

// Test 3 Starts the timer at 09:00 on the current day
var startAtNine = moment().hours(9).minutes(0).seconds(0).milliseconds(0).fromNow();
console.log(startAtNine);

sinceNine.textContent = "9am was " + startAtNine


// var userInput = $(nine).text();
// userInput.document.textContent.val();

// nine.styleColor = "red";

// Set the background Colors
// var ten = document.querySelector("#ten").style.backgroundColor = "grey";
// var eleven = document.querySelector("#eleven").style.backgroundColor = "green";


var ten = document.querySelector("#ten");
var eleven = document.querySelector("#eleven");
var noon = document.querySelector("#noon");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");

// one.style.backgroundColor = "red"
console.log(moment().toNow())



// Array of all the hours in the calendar
var hourColors = [ten, eleven, noon, one, two, three, four, five, six, seven, eight]


moment().calendar({
    sameDay: function (now) {
        for (let i = 0; i < hourColors.length; i++) {
            var hourColorsSelector = hourColors[i];
            if (this.isBefore(now)) {
                hourColorsSelector.style.backgroundColor = "green";
            } else {
                hourColorsSelector.style.backgroundColor = "grey";
            }
        }
    }
})

// Attempt at a test for color times?
// var now = 8

// for (let i = 0; i < hourColors.length; i++) {
//     var hourColorsSelector = hourColors[i];
//     if (hourColorsSelector >= now) {
//         hourColorsSelector.style.backgroundColor = "green";
//     } else {
//         hourColorsSelector.style.backgroundColor = "grey";
//     }
// }


// FOR LOOP TO PICK COLORS?
// for (let i = 0; i < hourColors.length; i++) {
//     var hourColorsSelector = hourColors[i];




// }


// moment().calendar({
//     sameDay: function (now) {
//         if (this.isBefore(now)) {
//             one.style.backgroundColor = "green";
//         } else {
//             one.style.backgroundColor = "grey";
//         }
//     }
// })
// moment().calendar({
//     sameDay: function (now) {
//         if (this.isBefore(now)) {
//             ten.style.backgroundColor = "green";
//         } else {
//             ten.style.backgroundColor = "grey";
//         }
//     }
// })


// moment().calendar({
//     sameDay: function (now) {
//         if (this.isBefore(now)) {
//             eleven.style.backgroundColor = "green";
//         } else {
//             eleven.style.backgroundColor = "grey";
//         }
//     }
// })
// Function to see if something has happened already or will happen later today
// moment().calendar({
//     sameDay: function (now) {
//       if (this.isBefore(now)) {
//         return '[Will Happen Today]';
//       } else {
//         return '[Happened Today]';