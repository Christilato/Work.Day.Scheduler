
// Current Day
var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);

//current hour
// var currentHour = moment().get('hour');
// console.log(currentHour);



function colorCoding() {
    var currentHour = moment().get("hour");

    //loop through each time-block
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]);
        //console.log(timeBlock, currentHour);

        // color specification based on time   
        if (timeBlock < currentHour)
        {
            $(this).addClass('past');
        } else if (timeBlock === currentHour)
        {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else
        {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });

}


colorCoding();


// save data in local storage 
$(function () {
    $(".saveBtn").on("click", function () {
        // console.log(this);
        var timeHour = $(this).parent().attr("id");
        var timeText = $(this).siblings(".description").val();

        localStorage.setItem(timeHour, timeText);

    })

})


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

