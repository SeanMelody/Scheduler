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



// Variables for Each Hour on the Calendar
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
var nineTwo = document.querySelector("#nine-two")


// Setting Each Hour to the time of day
nine = moment().hours(09).minutes(0).seconds(0).milliseconds(0);
ten = moment().hours(10).minutes(0).seconds(0).milliseconds(0);
eleven = moment().hours(11).minutes(0).seconds(0).milliseconds(0);
noon = moment().hours(12).minutes(0).seconds(0).milliseconds(0);
one = moment().hours(13).minutes(0).seconds(0).milliseconds(0);
two = moment().hours(14).minutes(0).seconds(0).milliseconds(0);
three = moment().hours(15).minutes(0).seconds(0).milliseconds(0);
four = moment().hours(16).minutes(0).seconds(0).milliseconds(0);
five = moment().hours(17).minutes(0).seconds(0).milliseconds(0);
six = moment().hours(18).minutes(0).seconds(0).milliseconds(0);
seven = moment().hours(19).minutes(0).seconds(0).milliseconds(0);
eight = moment().hours(20).minutes(0).seconds(0).milliseconds(0);
nineTwo = moment().hours(21).minutes(0).seconds(0).milliseconds(0);


// Input text box for Nine
var input = document.querySelector("#inputText");
function returnKeyListener(event) {
    if (event.keyCode == 13) {
        // console log input when enter is pressed
        console.log(input.value);
        var newEvent = input.value
        console.log(newEvent)
        localStorage.setItem('meeting', newEvent)
        localStorage.getItem('meeting', newEvent)
    }


}
input.addEventListener('keyup', returnKeyListener)
// localStorage.setItem('meeting', newEvent)
// localStorage.getItem('meeting', newEvent)



var meeting = {
    timeMeeting: "",
    nameMeeting: "",
}

// Onlick for Save Button
var tenTest = document.querySelector(".ten-test");




$(".save").click(function () {
    $(".ten-test")
    $("#ten").css("backgroundColor", "yellow")
    $(".ten-test").textContent = "meeting";

    // $(".ten-test").textContent=
    // tenTest = localStorage.setItem(timeMeeting, nameMeeting)

    console.log("save");
});



// console.log(five)

// console.log((nineTwo))


// console.log(moment().toNow());


// Variable Now = right now
var now = moment();


// Variable nowtest === right now hours as a number
var nowTest = moment().hours()
console.log(nowTest)

var beginningTime = moment('9:00', 'h:mma');
var endTime = moment().hours();
console.log(beginningTime.isBefore(endTime)); // true


var nineColor = document.querySelector(".nine-color")
// nineColor.style.backgroundColor = "grey"
// moment().calendar({
//     sameDay: function (now) {
//         if (moment().hours(09).isBefore(now)) {
//             nineColor.style.backgroundColor = "red";
//             console.log("Later Today");
//         } else {
//             nineColor.style.backgroundColor = "green";
//             console.log("Earlier Today");
//         }
//     }
// })

// Checking the time against now
// console.log(nine)
// console.log(now)
console.log(one.isBefore(now))

// IMPORTANT Array of all the hours in the calendar
// var hourColors = [nine, ten, eleven, noon, one, two, three, four, five, six, seven, eight, nineTwo]
// for (let i = 0; i < hourColors.length; i++) {
//     hourColorsSelector = hourColors[i];
//     if (hourColorsSelector.isBefore(now)) {
//         nineColor.style.backgroundColor = "yellow";
//         console.log("before now")
//         // Else if Statement to pick current hour?
//         // } else if (hourColorsSelector.isSame(now)) {
//         //     console.log("now")
//     } else {
//         (hourColorsSelector.isAfter(now))
//         console.log("after now")
//     }
// }

var nowHour = moment().hours()
console.log(nowHour)
// IMPORTANT !!!MAKES VAR ONE INTO NUMBER!!!!
console.log(one.hours());

// hourTime = [nine.hour(), ten.hour(), eleven.hour(), noon.hour(), one.hour(), two.hour(), three.hour(), four.hour(), five.hour(), six.hour(), seven.hour(), eight.hour(), nineTwo.hour()];
// for (let i = 0; i < hourTime.length; i++) {
//     var hourTimePick = hourTime[i];
//     console.log(hourTimePick)
// }
// if (nowHour === one.hours()) {
//     console.log("One O'Clock")
//     nineColor.style.backgroundColor = "orange"
// }



// IMPORTANT HOURS LOGGED BEFORE AND AFTER NOW!!!!
var hourColors = [nine, ten, eleven, noon, one, two, three, four, five, six, seven, eight, nineTwo]
for (let i = 0; i < hourColors.length; i++) {
    hourColorsSelector = hourColors[i];
    if (hourColorsSelector.isBefore(now)) {
        nineColor.style.backgroundColor = "yellow";
        console.log("before now")
        // Else if Statement to pick current hour?
        // } else if (hourColorsSelector.isSame(now)) {
        //     console.log("now")
    } else {
        (hourColorsSelector.isAfter(now))
        console.log("after now")
    }
}



if (one.isBefore(now)) {
    nineColor.textContent = "yellow";
    console.log("it is after 1pm")
} else {
    nineColor.textContent = "blue"
    console.log("it is before 1pm")
}

// Array of all the hours in the calendar
// var hourColors = [ten, eleven, noon, one, two, three, four, five, six, seven, eight, nineTwo]

// console.log(hourColors)
// moment().calendar({
//     sameDay: function (now) {
//         for (let i = 0; i < hourColors.length; i++) {
//             var hourColorsSelector = hourColors[i];
//             if (hourColorsSelector < now) {
//                 hourColorsSelector.style.backgroundColor = "green";
//             } else {
//                 hourColorsSelector.style.backgroundColor = "grey";
//             }
//         }

//     }
// })


// Variable nowtest = right now hours as a number
// var nowTest = moment().hours()
// console.log(nowTest)


// eight = moment().hours(21).minutes(0).seconds(0).milliseconds(0);
// console.log(eight);

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