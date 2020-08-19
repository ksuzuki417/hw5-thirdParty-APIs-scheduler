//Global variables

//display current day on top
//create time blocks for standard business hours

//var eight = $("<div>", {id: "eight", class: "row row-1"});
//console.log(eight)

//$(".container").append(eight);

//create variable for date/format
var m = moment().format("dddd, MMMM Do YYYY");
console.log(m)
//displaying date
$(currentDay.append(m))

//color code based on time (past, present, future)
//click on timeblock 
//enter an event
//create save button for that time block
//save the text in local storage
//saved events persist after refresh