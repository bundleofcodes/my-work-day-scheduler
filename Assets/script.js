// let's Javascript know that HTML and CSS have been successfully loaded and now the document is ready.
$(document).ready (function() {
// variable enables the save button to be activated.
const saveBtn = $('.saveBtn');

//  Creating the save button function calls for the save button to be called for each time block.
  saveBtn.each(function() {
    var text = $(this).siblings('.description');
    var time = $(this).parent().attr('id');

// When this function is called and clicked it allows the text value to be saved.
    $(this).on('click', function() {
      var textValue = text.val();
// Key and value are stored in local storage.
      localStorage.setItem(time, textValue);
    });
  });
// Loads any data saved from local storage. This is done for each hour created allowing for html to follow a 24 hour to 12 hour conversion.  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
// Calling the hourTracker function.
function hourTracker() {

// Loop over time blocks.
  $('.time-block').each(function () {
    var currentHour = dayjs().hour();
    var blockHour = $(this).attr('id').slice(5);
// Conditional statements that allow time blocks to update to past, present and future according the HTML and CSS class during the appropriate times.
    if (blockHour < currentHour) {
     $(this).addClass('past');
    }
    else if (blockHour == currentHour) {
      $(this).addClass('present');
    }
    else { 
      $(this).addClass('future');
    }
  })
}
// re-run the function.
hourTracker();
// Display the current date and time on scheduler.
  var currentDate = dayjs();
  $ ("#currentDay" ).text(currentDate.format('dddd, MMMM Do'));
});