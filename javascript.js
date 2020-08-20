$(document).ready(function(){

    //create variable for date/format
    var today = moment().format("dddd, MMMM Do YYYY");
    console.log(today)
    //displaying date
    $(currentDay.append(today))
    //Global variables

    var timeBlocks = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

    for (var i = 0; i < timeBlocks.length; i++) {
        var scheduler = $("<div>");
        var timeDiv = $("<div>");
        var notesDiv = $("<textarea>");
        var buttonEl = $("<button>");
        var iconEl = $("<i>");

        scheduler.attr("data-hour", timeBlocks[i])
        scheduler.attr("class", "row");

        buttonEl.attr("class", "saveBtn")

        $(".container").append(scheduler)
        scheduler.append(timeDiv)
        scheduler.append(notesDiv);
        scheduler.append(buttonEl);

        timeDiv.text(timeBlocks[i])
    }
})


//display current day on top
//create time blocks for standard business hours


//var timeBlock8 = $("<div>").text("8AM");
//console.log(eight)

//$(".container").append(timeBlock8);



//color code based on time (past, present, future)
//click on timeblock 
//enter an event
//create save button for that time block
//save the text in local storage
//saved events persist after refresh
