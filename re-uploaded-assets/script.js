
// Access the ID #currentDay and print the current date there using Moments
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = "Today is: " + (moment().format('MMMM Do YYYY'));




// Setting Variable to Now using Moments
var now = moment();


// Variables for Each Hour on the Calendar
var nine = document.querySelector("#nine");
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


// Setting Each Hour to it's time of day, using Moments
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



// VARIABLES FOR THE COLOR CHANGING DIV CLASSES
var nineColor = document.querySelector(".nine-color")
var tenColor = document.querySelector(".ten-color")
var elevenColor = document.querySelector(".eleven-color")
var noonColor = document.querySelector(".noon-color")
var oneColor = document.querySelector(".one-color")
var twoColor = document.querySelector(".two-color")
var threeColor = document.querySelector(".three-color")
var fourColor = document.querySelector(".four-color")
var fiveColor = document.querySelector(".five-color")
var sixColor = document.querySelector(".six-color")
var sevenColor = document.querySelector(".seven-color")
var eightColor = document.querySelector(".eight-color")
var nineTwoColor = document.querySelector(".nine-two-color")




// SETTING THE COLOR OF THE DIVS BASED ON TIME (RED FOR CURRENT TIME, GREY FOR IN THE PAST, GREEN FOR THE FUTURE)

// Nine O'clock hour colors
if (nine.hour() === (moment().hours())) {
    // if current time is 9am: color is Bootstrap Danger
    $(".nine-color").css("background-color", "#ff6961");
} else if (nine.isBefore(now)) {
    // if current time is AFTER 9am: color is Bootstrap Secondary
    $(".nine-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 9am: color is Bootstrap Success
    $(".nine-color").css("background-color", "#77dd77");
}

// Ten O'clock hour colors if statement
if (ten.hour() === (moment().hours())) {
    //   if current time is 10am: color is Bootstrap Danger
    $(".ten-color").css("background-color", "#ff6961");
} else if (ten.isBefore(now)) {
    //  if current time is AFTER 10am: color is Bootstrap Secondary
    $(".ten-color").css("background-color", "#d3d3d3");
} else {
    //   if current time is BEFORE 10am: color is Bootstrap Success
    $(".ten-color").css("background-color", "#77dd77");
}

// Eleven O'clock hour colors if statement
if (eleven.hour() === (moment().hours())) {
    // if current time is 11am: color is Bootstrap Danger
    $(".eleven-color").css("background-color", "#ff6961");
} else if (eleven.isBefore(now)) {
    // if current time is AFTER 11am: color is Bootstrap Secondary
    $(".eleven-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 11am: color is Bootstrap Success
    $(".eleven-color").css("background-color", "#77dd77");
}

// Noon hour colors if statement
if (noon.hour() === (moment().hours())) {
    //if current time is noon: color is Bootstrap Danger
    $(".noon-color").css("background-color", "#ff6961");
} else if (noon.isBefore(now)) {
    //if current time is AFTER noon: color is Bootstrap Secondary
    $(".noon-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE noon: color is Bootstrap Success
    $(".noon-color").css("background-color", "#77dd77");
}

// One O'clock hour colors if statement
if (one.hour() === (moment().hours())) {
    // if current time is 1pm: color is Bootstrap Danger
    $(".one-color").css("background-color", "#ff6961");
} else if (one.isBefore(now)) {
    // if current time is AFTER 1pm: color is Bootstrap Secondary
    $(".one-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 1pm: color is Bootstrap Success
    $(".one-color").css("background-color", "#77dd77");
}

// Two O'clock hour colors if statement
if (two.hour() === (moment().hours())) {
    // if current time is 2pm: color is Bootstrap Danger
    $(".two-color").css("background-color", "#ff6961");
} else if (two.isBefore(now)) {
    // if current time is AFTER 2pm: color is Bootstrap Secondary
    $(".two-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 2pm: color is Bootstrap Success
    $(".two-color").css("background-color", "#77dd77");
}

// Three O'clock hour colors if statement
if (three.hour() === (moment().hours())) {
    // if current time is 3pm: color is Bootstrap Danger
    $(".three-color").css("background-color", "#ff6961");
} else if (three.isBefore(now)) {
    // if current time is AFTER 3pm: color is Bootstrap Secondary
    $(".three-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 3pm: color is Bootstrap Success
    $(".three-color").css("background-color", "#77dd77");
}

// Four O'clock hour colors if statement
if (four.hour() === (moment().hours())) {
    // if current time is 4pm: color is Bootstrap Danger
    $(".four-color").css("background-color", "#ff6961");
} else if (four.isBefore(now)) {
    // if current time is AFTER 4pm: color is Bootstrap Secondary
    $(".four-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 4pm: color is Bootstrap Success
    $(".four-color").css("background-color", "#77dd77");
}

// Five O'clock hour colors if statement
if (five.hour() === (moment().hours())) {
    //if current time is 5pm: color is Bootstrap Danger
    $(".five-color").css("background-color", "#ff6961");
} else if (five.isBefore(now)) {
    //if current time is AFTER 5pm: color is Bootstrap Secondary
    $(".five-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 5pm: color is Bootstrap Success
    $(".five-color").css("background-color", "#77dd77");
}

// Six O'clock hour colors if statement
if (six.hour() === (moment().hours())) {
    //if current time is 6pm: color is Bootstrap Danger
    $(".six-color").css("background-color", "#ff6961");
} else if (six.isBefore(now)) {
    //if current time is AFTER 6pm: color is Bootstrap Secondary
    $(".six-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 6pm: color is Bootstrap Success
    $(".six-color").css("background-color", "#77dd77");
}

// Seven O'clock hour colors if statement
if (seven.hour() === (moment().hours())) {
    // if current time is 7pm: color is Bootstrap Danger
    $(".seven-color").css("background-color", "#ff6961");
} else if (seven.isBefore(now)) {
    // if current time is AFTER 7pm: color is Bootstrap Secondary
    $(".seven-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 7pm: color is Bootstrap Success
    $(".seven-color").css("background-color", "#77dd77");
}

// Eight O'clock hour colors if statement
if (eight.hour() === (moment().hours())) {
    // if current time is 8pm: color is Bootstrap Danger
    $(".eight-color").css("background-color", "#ff6961");
    console.log("current hour")
} else if (eight.isBefore(now)) {
    // if current time is AFTER 8pm: color is Bootstrap Secondary
    $(".eight-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 8pm: color is Bootstrap Success
    $(".eight-color").css("background-color", "#77dd77");
}

// Nine PM hour colors if statement
if (nineTwo.hour() === (moment().hours())) {
    // if current time is 9pm: color is Bootstrap Danger
    $(".nine-two-color").css("background-color", "#ff6961");
    console.log("current hour")
} else if (nineTwo.isBefore(now)) {
    // if current time is AFTER 9pm: color is Bootstrap Secondary
    $(".nine-two-color").css("background-color", "#d3d3d3");
} else {
    // if current time is BEFORE 9pm: color is Bootstrap Success
    $(".nine-two-color").css("background-color", "#77dd77");
}



// Setting the save buttons to the local storage
// Using a different Save button and place in local storage for each hour


// NINE SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var nineInput = localStorage.getItem("nine");
document.querySelector(".nine-text").value = nineInput

// Function to set the value and save to local storage on Save button being clicked
$(".nine-save").click(function () {
    var nineInput = document.querySelector(".nine-text").value
    // Save to local storage
    localStorage.setItem("nine", nineInput);
    // Get from local storage
    var nineInput = localStorage.getItem("nine");
    var nineText = document.querySelector(".nine-text")
    // Print to input space
    nineText.textContent = nineInput

});


// TEN SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var tenInput = localStorage.getItem("ten");
document.querySelector(".ten-text").value = tenInput

// Function to set the value and save to local storage on Save button being clicked
$(".ten-save").click(function () {
    var tenInput = document.querySelector(".ten-text").value
    // Save to local storage
    localStorage.setItem("ten", tenInput);
    // Get from local storage
    var tenInput = localStorage.getItem("ten");
    var tenText = document.querySelector(".ten-text")
    // Print to input space
    tenText.textContent = tenInput

});


// ELEVEN SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var elevenInput = localStorage.getItem("eleven");
document.querySelector(".eleven-text").value = elevenInput

// Function to set the value and save to local storage on Save button being clicked
$(".eleven-save").click(function () {
    var elevenInput = document.querySelector(".eleven-text").value
    // Save to local storage
    localStorage.setItem("eleven", elevenInput);
    // Get from local storage
    var elevenInput = localStorage.getItem("eleven");
    var elevenText = document.querySelector(".eleven-text")
    // Print to input space
    elevenText.textContent = elevenInput

});


// NOON SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var noonInput = localStorage.getItem("noon");
document.querySelector(".noon-text").value = noonInput

// Function to set the value and save to local storage on Save button being clicked
$(".noon-save").click(function () {
    var noonInput = document.querySelector(".noon-text").value
    // Save to local storage
    localStorage.setItem("noon", noonInput);
    // Get from local storage
    var noonInput = localStorage.getItem("noon");
    var noonText = document.querySelector(".noon-text")
    // Print to input space
    noonText.textContent = noonInput

});

// ONE SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var oneInput = localStorage.getItem("one");
document.querySelector(".one-text").value = oneInput

// Function to set the value and save to local storage on Save button being clicked
$(".one-save").click(function () {
    var oneInput = document.querySelector(".one-text").value
    // Save to local storage
    localStorage.setItem("one", oneInput);
    // Get from local storage
    var oneInput = localStorage.getItem("one");
    var oneText = document.querySelector(".one-text")
    // Print to input space
    oneText.textContent = oneInput

});

// TWO SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var twoInput = localStorage.getItem("two");
document.querySelector(".two-text").value = twoInput

// Function to set the value and save to local storage on Save button being clicked
$(".two-save").click(function () {
    var twoInput = document.querySelector(".two-text").value
    // Save to local storage
    localStorage.setItem("two", twoInput);
    // Get from local storage
    var twoInput = localStorage.getItem("two");
    var twoText = document.querySelector(".two-text")
    // Print to input space
    twoText.textContent = twoInput

});

// THREE SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var threeInput = localStorage.getItem("three");
document.querySelector(".three-text").value = threeInput

// Function to set the value and save to local storage on Save button being clicked
$(".three-save").click(function () {
    var threeInput = document.querySelector(".three-text").value
    // Save to local storage
    localStorage.setItem("three", threeInput);
    // Get from local storage
    var threeInput = localStorage.getItem("three");
    var threeText = document.querySelector(".three-text")
    // Print to input space
    threeText.textContent = threeInput

});

// FOUR SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var fourInput = localStorage.getItem("four");
document.querySelector(".four-text").value = fourInput

// Function to set the value and save to local storage on Save button being clicked
$(".four-save").click(function () {
    var fourInput = document.querySelector(".four-text").value
    // Save to local storage
    localStorage.setItem("four", fourInput);
    // Get from local storage
    var fourInput = localStorage.getItem("four");
    var fourText = document.querySelector(".four-text")
    // Print to input space
    fourText.textContent = fourInput

});

// FIVE SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var fiveInput = localStorage.getItem("five");
document.querySelector(".five-text").value = fiveInput

// Function to set the value and save to local storage on Save button being clicked
$(".five-save").click(function () {
    var fiveInput = document.querySelector(".five-text").value
    // Save to local storage
    localStorage.setItem("five", fiveInput);
    // Get from local storage
    var fiveInput = localStorage.getItem("five");
    var fiveText = document.querySelector(".five-text")
    // Print to input space
    fiveText.textContent = fiveInput

});

// SIX SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var sixInput = localStorage.getItem("six");
document.querySelector(".six-text").value = sixInput

// Function to set the value and save to local storage on Save button being clicked
$(".six-save").click(function () {
    var sixInput = document.querySelector(".six-text").value
    // Save to local storage
    localStorage.setItem("six", sixInput);
    // Get from local storage
    var sixInput = localStorage.getItem("six");
    var sixText = document.querySelector(".six-text")
    // Print to input space
    sixText.textContent = sixInput

});

// SEVEN SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var sevenInput = localStorage.getItem("seven");
document.querySelector(".seven-text").value = sevenInput

// Function to set the value and save to local storage on Save button being clicked
$(".seven-save").click(function () {
    var sevenInput = document.querySelector(".seven-text").value
    // Save to local storage
    localStorage.setItem("seven", sevenInput);
    // Get from local storage
    var sevenInput = localStorage.getItem("seven");
    var sevenText = document.querySelector(".seven-text")
    // Print to input space
    sevenText.textContent = sevenInput

});

// EIGHT SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var eightInput = localStorage.getItem("eight");
document.querySelector(".eight-text").value = eightInput

// Function to set the value and save to local storage on Save button being clicked
$(".eight-save").click(function () {
    var eightInput = document.querySelector(".eight-text").value
    // Save to local storage
    localStorage.setItem("eight", eightInput);
    // Get from local storage
    var eightInput = localStorage.getItem("eight");
    var eightText = document.querySelector(".eight-text")
    // Print to input space
    eightText.textContent = eightInput

});

// NINE SAVE BUTTON AND LOCAL STORAGE

// Check to see if there is anything in local storage for the hour first
var nineTwoInput = localStorage.getItem("nine-two");
document.querySelector(".nine-two-text").value = nineTwoInput

// Function to set the value and save to local storage on Save button being clicked
$(".nine-two-save").click(function () {
    var nineTwoInput = document.querySelector(".nine-two-text").value
    // Save to local storage
    localStorage.setItem("nine-two", nineTwoInput);
    // Get from local storage
    var nineTwoInput = localStorage.getItem("nine-two");
    var nineTwoText = document.querySelector(".nine-two-text")
    // Print to input space
    nineTwoText.textContent = nineTwoInput

});
