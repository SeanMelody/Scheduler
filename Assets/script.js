console.log("Hi")

var currentDay = document.querySelector("#currentDay")
currentDay.textContent = moment().format('MMMM Do YYYY')
// currentDay.textContent(moment().format('MMMM Do YYYY, h:mm:ss a'));