$(document).ready(function(){

    //create variable for date/format
    var today = moment().format("dddd, MMMM Do YYYY");
    console.log(today)
    //displaying date
    $(currentDay.append(today))
    
    //create time blocks
    var timeBlocks = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
    var militaryHour = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    
    function renderSchedule() {

        for (var i = 0; i < timeBlocks.length; i++) {
        //create variables in each time block.
            var scheduler = $("<div>");
            var timeDiv = $("<div>");
            var notesDiv = $("<textarea>");
            var buttonEl = $("<button>").text("SAVE");

            scheduler.attr("data-hour", timeBlocks[i]);
        //adding militaryHour as an ID to compare time.
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
            //retrieve data from local storage
            $(notesDiv).val(localStorage.getItem(timeBlocks[i]));

            var currentTime = moment().hour();
        //color code based on time (past, present, future)
        //applying "if" function to each textarea.
            $("textarea").each(function(){
            // if id of textarea is equal to currentTime, then it is present.
                if (militaryHour[i] == currentTime) {
                    notesDiv.addClass("present");
            // if id of textarea is grater than currenTime, then it is future.
                } else if (militaryHour[i] > currentTime)  {
                    notesDiv.addClass("future");
            // if id of textarea is other than the above, then it is past.
                } else {
                    notesDiv.addClass("past");
                }
            })
        };
    }

    renderSchedule();

        //click event to save data into localstorage
        $(".saveBtn").on("click", function() {
            var eventData = $(this).parent().find("textarea").val()
            var timeSlot = $(this).parent().attr("data-hour")
            //send data into localstorage
            localStorage.setItem(timeSlot, eventData);

        renderSchedule

    })
})
