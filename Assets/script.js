console.log("Hi")
// Access the ID #currentDay and print the current date there
var currentDay = document.querySelector("#currentDay");
currentDay.textContent = "Today is: " + (moment().format('MMMM Do YYYY'));
// currentDay.textContent(moment().format('MMMM Do YYYY, h:mm:ss a'));
var sinceNine = document.querySelector("#sincenine")




var test = moment().format("MMMM Do YYYY");
console.log(test);

var test2 = moment().startOf('day').fromNow();
console.log(test2);

// Test 3 Starts the timer at 09:00 on the current day
var startAtNine = moment().hours(9).minutes(0).seconds(0).milliseconds(0).fromNow();
console.log(startAtNine);

sinceNine.textContent = "9am was " + startAtNine



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



// IMPORTANT HOURS LOGGED BEFORE AND AFTER NOW!!!!
var hourColors = [nine, ten, eleven, noon, one, two, three, four, five, six, seven, eight, nineTwo]
for (let i = 0; i < hourColors.length; i++) {
    hourColorsSelector = hourColors[i];
    if (hourColorsSelector.isBefore(now)) {
        // hourColorSelector.style.backgroundColor = "yellow";
        console.log("before now")
        // console.log(hourColors[i])
        // Else if Statement to pick current hour?
        // } else if (hourColorsSelector.isSame(now)) {
        //     console.log("now")
    } else {
        (hourColorsSelector.isAfter(now))
        // hourColorsSelector.style.backgroundColor = "green"
        console.log("after now")
    }
}


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




// SETTING THE COLOR OF THE DIVS BASED ON TIME

if (nine.hour() === (moment().hours())) {
    nineColor.style.backgroundColor = "red"
} else if (nine.isBefore(now)) {
    nineColor.style.backgroundColor = "grey"
} else {
    nineColor.style.backgroundColor = "green"
}
if (ten.hour() === (moment().hours())) {
    tenColor.style.backgroundColor = "red"
} else if (ten.isBefore(now)) {
    tenColor.style.backgroundColor = "grey"
} else {
    tenColor.style.backgroundColor = "green"
}
if (eleven.hour() === (moment().hours())) {
    elevenColor.style.backgroundColor = "red"
} else if (eleven.isBefore(now)) {
    elevenColor.style.backgroundColor = "grey"
} else {
    elevenColor.style.backgroundColor = "green"
}
if (noon.hour() === (moment().hours())) {
    noonColor.style.backgroundColor = "red"
} else if (noon.isBefore(now)) {
    noonColor.style.backgroundColor = "grey"
} else {
    noonColor.style.backgroundColor = "green"
}
if (one.hour() === (moment().hours())) {
    oneColor.style.backgroundColor = "red"
} else if (one.isBefore(now)) {
    oneColor.style.backgroundColor = "grey"
} else {
    oneColor.style.backgroundColor = "green"
}
if (two.hour() === (moment().hours())) {
    twoColor.style.backgroundColor = "red"
} else if (two.isBefore(now)) {
    twoColor.style.backgroundColor = "grey"
} else {
    twoColor.style.backgroundColor = "green"
}
if (three.hour() === (moment().hours())) {
    threeColor.style.backgroundColor = "red"
} else if (three.isBefore(now)) {
    threeColor.style.backgroundColor = "grey"
} else {
    threeColor.style.backgroundColor = "green"
}
if (four.hour() === (moment().hours())) {
    fourColor.style.backgroundColor = "red"
} else if (four.isBefore(now)) {
    fourColor.style.backgroundColor = "grey"
} else {
    fourColor.style.backgroundColor = "green"
}
if (five.hour() === (moment().hours())) {
    fiveColor.style.backgroundColor = "red"
} else if (five.isBefore(now)) {
    fiveColor.style.backgroundColor = "grey"
} else {
    fiveColor.style.backgroundColor = "green"
}
if (six.hour() === (moment().hours())) {
    sixColor.style.backgroundColor = "red"
} else if (six.isBefore(now)) {
    sixColor.style.backgroundColor = "grey"
} else {
    sixColor.style.backgroundColor = "green"
}
if (seven.hour() === (moment().hours())) {
    sevenColor.style.backgroundColor = "red"
} else if (seven.isBefore(now)) {
    sevenColor.style.backgroundColor = "grey"
} else {
    sevenColor.style.backgroundColor = "green"
}
if (eight.hour() === (moment().hours())) {
    eightColor.style.backgroundColor = "red"
    console.log("current hour")
} else if (eight.isBefore(now)) {
    eightColor.style.backgroundColor = "grey"
} else {
    eightColor.style.backgroundColor = "green"
}
if (nineTwo.hour() === (moment().hours())) {
    nineTwoColor.style.backgroundColor = "red"
    console.log("current hour")
} else if (nineTwo.isBefore(now)) {
    nineTwoColor.style.backgroundColor = "grey"
} else {
    nineTwoColor.style.backgroundColor = "green"
}



// SETTING THE SAVE BUTTONS TO THE LOCAL STORAGE


// NINE SAVE BUTTON AND LOCAL STORAGE

var nineInput = localStorage.getItem("nine");
document.querySelector(".nine-text").value = nineInput


$(".nine-save").click(function () {
    var nineInput = document.querySelector(".nine-text").value
    localStorage.setItem("nine", nineInput);

    var nineInput = localStorage.getItem("nine");
    var nineText = document.querySelector(".nine-text")

    nineText.textContent = nineInput

});


// TEN SAVE BUTTON AND LOCAL STORAGE

var tenInput = localStorage.getItem("ten");
document.querySelector(".ten-text").value = tenInput


$(".ten-save").click(function () {
    var tenInput = document.querySelector(".ten-text").value
    localStorage.setItem("ten", tenInput);

    var tenInput = localStorage.getItem("ten");
    var tenText = document.querySelector(".ten-text")

    tenText.textContent = tenInput

});


// ELEVEN SAVE BUTTON AND LOCAL STORAGE

var elevenInput = localStorage.getItem("eleven");
document.querySelector(".eleven-text").value = elevenInput


$(".eleven-save").click(function () {
    var elevenInput = document.querySelector(".eleven-text").value
    localStorage.setItem("eleven", elevenInput);

    var elevenInput = localStorage.getItem("eleven");
    var elevenText = document.querySelector(".eleven-text")

    elevenText.textContent = elevenInput

});


// NOON SAVE BUTTON AND LOCAL STORAGE

var noonInput = localStorage.getItem("noon");
document.querySelector(".noon-text").value = noonInput


$(".noon-save").click(function () {
    var noonInput = document.querySelector(".noon-text").value
    localStorage.setItem("noon", noonInput);

    var noonInput = localStorage.getItem("noon");
    var noonText = document.querySelector(".noon-text")

    noonText.textContent = noonInput

});

// ONE SAVE BUTTON AND LOCAL STORAGE

var oneInput = localStorage.getItem("one");
document.querySelector(".one-text").value = oneInput


$(".one-save").click(function () {
    var oneInput = document.querySelector(".one-text").value
    localStorage.setItem("one", oneInput);

    var oneInput = localStorage.getItem("one");
    var oneText = document.querySelector(".one-text")

    oneText.textContent = oneInput

});

// TWO SAVE BUTTON AND LOCAL STORAGE

var twoInput = localStorage.getItem("two");
document.querySelector(".two-text").value = twoInput


$(".two-save").click(function () {
    var twoInput = document.querySelector(".two-text").value
    localStorage.setItem("two", twoInput);

    var twoInput = localStorage.getItem("two");
    var twoText = document.querySelector(".two-text")

    twoText.textContent = twoInput

});

// THREE SAVE BUTTON AND LOCAL STORAGE

var threeInput = localStorage.getItem("three");
document.querySelector(".three-text").value = threeInput


$(".three-save").click(function () {
    var threeInput = document.querySelector(".three-text").value
    localStorage.setItem("three", threeInput);

    var threeInput = localStorage.getItem("three");
    var threeText = document.querySelector(".three-text")

    threeText.textContent = threeInput

});

// FOUR SAVE BUTTON AND LOCAL STORAGE

var fourInput = localStorage.getItem("four");
document.querySelector(".four-text").value = fourInput


$(".four-save").click(function () {
    var fourInput = document.querySelector(".four-text").value
    localStorage.setItem("four", fourInput);

    var fourInput = localStorage.getItem("four");
    var fourText = document.querySelector(".four-text")

    fourText.textContent = fourInput

});

// FIVE SAVE BUTTON AND LOCAL STORAGE

var fiveInput = localStorage.getItem("five");
document.querySelector(".five-text").value = fiveInput


$(".five-save").click(function () {
    var fiveInput = document.querySelector(".five-text").value
    localStorage.setItem("five", fiveInput);

    var fiveInput = localStorage.getItem("five");
    var fiveText = document.querySelector(".five-text")

    fiveText.textContent = fiveInput

});

// SIX SAVE BUTTON AND LOCAL STORAGE

var sixInput = localStorage.getItem("six");
document.querySelector(".six-text").value = sixInput


$(".six-save").click(function () {
    var sixInput = document.querySelector(".six-text").value
    localStorage.setItem("six", sixInput);

    var sixInput = localStorage.getItem("six");
    var sixText = document.querySelector(".six-text")

    sixText.textContent = sixInput

});

// SEVEN SAVE BUTTON AND LOCAL STORAGE

var sevenInput = localStorage.getItem("seven");
document.querySelector(".seven-text").value = sevenInput


$(".seven-save").click(function () {
    var sevenInput = document.querySelector(".seven-text").value
    localStorage.setItem("seven", sevenInput);

    var sevenInput = localStorage.getItem("seven");
    var sevenText = document.querySelector(".seven-text")

    sevenText.textContent = sevenInput

});

// EIGHT SAVE BUTTON AND LOCAL STORAGE

var eightInput = localStorage.getItem("eight");
document.querySelector(".eight-text").value = eightInput


$(".eight-save").click(function () {
    var eightInput = document.querySelector(".eight-text").value
    localStorage.setItem("eight", eightInput);

    var eightInput = localStorage.getItem("eight");
    var eightText = document.querySelector(".eight-text")

    eightText.textContent = eightInput

});

// NINE SAVE BUTTON AND LOCAL STORAGE

var nineTwoInput = localStorage.getItem("nine-two");
document.querySelector(".nine-two-text").value = nineTwoInput


$(".nine-two-save").click(function () {
    var nineTwoInput = document.querySelector(".nine-two-text").value
    localStorage.setItem("nine-two", nineTwo);

    var nineTwoInput = localStorage.getItem("nine-two");
    var nineTwoText = document.querySelector(".nine-two-text")

    nineTwoText.textContent = nineTwoInput

});







// FUNCTION TESTS!


// var hourTest = [
//     {
//         time: nine,
//         color: nineColor,
//     },
//     {
//         time: ten,
//         color: tenColor,
//     },
//     {
//         time: eleven,
//         color: elevenColor,
//     },
//     {
//         time: noon,
//         color: noonColor,
//     },
//     {
//         time: one,
//         color: oneColor,
//     },
//     {
//         time: two,
//         color: twoColor,
//     },
//     {
//         time: three,
//         color: threeColor,
//     },
//     {
//         time: ten,
//         color: tenColor,
//     },
//     {
//         time: four,
//         color: fourColor,
//     },
//     {
//         time: ten,
//         color: tenColor,
//     },
//     {
//         time: five,
//         color: fiveColor,
//     },
//     {
//         time: six,
//         color: sixColor,
//     },
//     {
//         time: seven,
//         color: sevenColor,
//     },
//     {
//         time: eight,
//         color: eightColor,
//     },
//     {
//         time: nineTwo,
//         color: nineTwoColor,
//     },
// ];

















// TIME CHECKS

var now = moment();


// Variable nowtest === right now hours as a number
var nowTest = moment().hours()
console.log(nowTest)

var beginningTime = moment('9:00', 'h:mma');
var endTime = moment().hours();
console.log(beginningTime.isBefore(endTime)); // true


console.log(one.isBefore(now))


var nowHour = moment().hours()
console.log(nowHour)



if (one.isBefore(now)) {
    // nineColor.textContent = "yellow";
    console.log("it is after 1pm")
} else {
    // nineColor.textContent = "blue"
    console.log("it is before 1pm")
}



// FOR LOOP TO PICK COLORS?
// for (let i = 0; i < hourColors.length; i++) {
//     var hourColorsSelector = hourColors[i];




// }

// Function to see if something has happened already or will happen later today
// moment().calendar({
//     sameDay: function (now) {
//       if (this.isBefore(now)) {
//         return '[Will Happen Today]';
//       } else {
//         return '[Happened Today]';