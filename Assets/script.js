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
    // $(".ten-test")
    $("#ten").css("backgroundColor", "yellow")

    // $(".ten-test").value("meeting")

    // $(".ten-test").textContent=
    // tenTest = localStorage.setItem(timeMeeting, nameMeeting)

    console.log("save");
});









// I DON'T KNOW WHAT THE FUCK WILL WORK HERE
// $(".eleven-test").keyup(function () {
//     var value = $(this).val();
//     $("p").text(value);
// })
//     .keyup();









// var elevenInput = localStorage.getItem("eleven");
// var elevenUgh = document.querySelector(".elevenUgh")
// elevenUgh.textContent = elevenInput


// ELEVEN SAVE BUTTON AND LOCAL STORAGE
$(".save-eleven").click(function () {
    var elevenInput = document.querySelector(".eleven-test").value
    localStorage.setItem("eleven", elevenInput);


    var elevenInput = localStorage.getItem("eleven");
    var elevenUgh = document.querySelector(".elevenUgh")
    elevenUgh.textContent = elevenInput


});


// TEST!

// if (noon item ?) {

// } else {



$(".save-noon").click(function () {
    var noonInput = document.querySelector(".noon-input").value
    localStorage.setItem("noon", noonInput);


    var noonInput = localStorage.getItem("noon");
    var noonTest = document.querySelector(".noon-test")
    noonTest.textContent = noonInput


    //     });

})

// TEST THREE
$(".save-three").click(function () {
    $(".demo-three").css("background-color", "green");


})
// var noonInput = document.querySelector(".noon-input").value
// localStorage.setItem("noon", noonInput);


// var noonInput = localStorage.getItem("noon");
// $("div.demo-three").text(noonInput)


// OBJECT TEST

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

// DOCUMENT TO ITERATE THROUGH FOR COLOR CHANGING DIVS
var hourTest = [
    {
        time: nine,
        color: nineColor,
    },
    {
        time: ten,
        color: tenColor,
    },
    {
        time: eleven,
        color: elevenColor,
    },
    {
        time: noon,
        color: noonColor,
    },
    {
        time: one,
        color: oneColor,
    },
    {
        time: two,
        color: twoColor,
    },
    {
        time: three,
        color: threeColor,
    },
    {
        time: ten,
        color: tenColor,
    },
    {
        time: four,
        color: fourColor,
    },
    {
        time: ten,
        color: tenColor,
    },
    {
        time: five,
        color: fiveColor,
    },
    {
        time: six,
        color: sixColor,
    },
    {
        time: seven,
        color: sevenColor,
    },
    {
        time: eight,
        color: eightColor,
    },
    {
        time: nineTwo,
        color: nineTwoColor,
    },
];
// time = ""
// color = ""
// $.each(hourTest, function (time, color) {
//     console.log(time, color);
//     if (time.isBefore(now))

// });
var nowTest = moment().hours()
console.log(nowTest)

if (nine.isBefore(now)) {
    nineColor.style.backgroundColor = "grey"
} else {
    nineColor.style.backgroundColor = "green"
}
if (ten.isBefore(now)) {
    tenColor.style.backgroundColor = "grey"
} else {
    tenColor.style.backgroundColor = "green"
}
if (eleven.isBefore(now)) {
    elevenColor.style.backgroundColor = "grey"
} else {
    elevenColor.style.backgroundColor = "green"
}
if (noon.isBefore(now)) {
    noonColor.style.backgroundColor = "grey"
} else {
    noonColor.style.backgroundColor = "green"
}
if (one.isBefore(now)) {
    oneColor.style.backgroundColor = "grey"
} else {
    oneColor.style.backgroundColor = "green"
}
if (two.isBefore(now)) {
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
if (five.isBefore(now)) {
    fiveColor.style.backgroundColor = "grey"
} else {
    fiveColor.style.backgroundColor = "green"
}
if (six.isBefore(now)) {
    sixColor.style.backgroundColor = "grey"
} else {
    sixColor.style.backgroundColor = "green"
}
if (seven.isBefore(now)) {
    sevenColor.style.backgroundColor = "grey"
} else {
    sevenColor.style.backgroundColor = "green"
}
if (eight.isBefore(now)) {
    eightColor.style.backgroundColor = "grey"
} else {
    eightColor.style.backgroundColor = "green"
}
if (nineTwo.isBefore(now)) {
    nineTwoColor.style.backgroundColor = "grey"
} else {
    nineTwoColor.style.backgroundColor = "green"
}


// currentQuestion.choices.forEach(function (choice, i) {
//     // Make a button for each choice
//     var choicesButtons = document.createElement("button");
//     // Set the attribute of each choice
//     choicesButtons.setAttribute("class", "choice");
// });


// if (hourColorsSelector.isBefore(now)) {
// hourColorSelector.style.backgroundColor = "yellow";
// console.log("before now")
// console.log(hourColors[i])
// Else if Statement to pick current hour?
// } else if (hourColorsSelector.isSame(now)) {
//     console.log("now")
//     } else {
//         (hourColorsSelector.isAfter(now))
//         // hourColorsSelector.style.backgroundColor = "green"
//         console.log("after now")
//     }
// }
// })




















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



// // IMPORTANT HOURS LOGGED BEFORE AND AFTER NOW!!!!
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