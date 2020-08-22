$(document).ready(function(){

    //create variable for date/format
    var today = moment().format("dddd, MMMM Do YYYY");
    console.log(today)
    //displaying date
    $(currentDay.append(today))
    
    //create time blocks
    var timeBlocks = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
    var militaryHour = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    for (var i = 0; i < timeBlocks.length; i++) {
        //create variables in each time block.
        var scheduler = $("<div>");
        var timeDiv = $("<div>");
        var notesDiv = $("<textarea>");
        var buttonEl = $("<button>").text("SAVE");
        var iconEl = $("<i>");

        scheduler.attr("data-hour", timeBlocks[i]);
        scheduler.attr("id", militaryHour[i]);
        //adding class attribute as row.
        scheduler.attr("class", "row");
        timeDiv.attr("class", "hour col-1");
        notesDiv.attr("class", "description col-9");
        buttonEl.attr("class", "saveBtn")

        $(".container").append(scheduler)
        scheduler.append(timeDiv)
        scheduler.append(notesDiv);
        scheduler.append(buttonEl);

        timeDiv.text(timeBlocks[i])
    }

    var currentTime = moment().hour();
    //color code based on time (past, present, future)
    //applying "if" function to each textarea.
    $("textarea").each(function(){
        // if id of textarea is equal to currentTime, then it is present.
        if ($(this).attr("id") == currentTime) {
            $(this).addClass("present");
        // if id of textarea is grater than currenTime, then it is future.
        } else if ($(this).attr("id") > currentTime)  {
            $(this).addClass("future");
        // if id of textarea is other than the above, then it is past.
        } else {
            $(this).addClass("past");
        }
    })
    

    buttonEl.click(function() {
        $("#8").val(localStorage.getItem("8"));
        console.log(localStorage);
    })
})

//place text "SAVE" vertially on save button.

//click on timeblock 
//enter an event
//create save button for that time block
//save the text in local storage

//saved events persist after refresh
