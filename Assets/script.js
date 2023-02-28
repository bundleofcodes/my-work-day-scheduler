// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready (function() {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").on("click", function() {

     // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
   var text_9 = $(".description1").val()
    localStorage.setItem("time_9", text_9);

    var text_10 = $(".description2").val()
    localStorage.setItem("time_10", text_10);

    var text_11 = $(".description3").val()
    localStorage.setItem("time_11", text_11);

    var text_12 = $(".description4").val()
    localStorage.setItem("time_12", text_12);

    var text_1 = $(".description5").val()
    localStorage.setItem("time_1", text_1);

    var text_2 = $(".description6").val()
    localStorage.setItem("time_2", text_2);

    var text_3 = $(".description7").val()
    localStorage.setItem("time_3", text_3);

    var text_4 = $(".description8").val()
    localStorage.setItem("time_4", text_4);

    var text_5 = $(".description9").val()
    localStorage.setItem("time_5", text_5);
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $(".description1").val(localStorage.getItem("time_9"));
  $(".description1").val(localStorage.getItem("time_10"));
  $(".description1").val(localStorage.getItem("time_11"));
  $(".description1").val(localStorage.getItem("time_12"));
  $(".description1").val(localStorage.getItem("time_1"));
  $(".description1").val(localStorage.getItem("time_2"));
  $(".description1").val(localStorage.getItem("time_3"));
  $(".description1").val(localStorage.getItem("time_4"));
  $(".description1").val(localStorage.getItem("time_5"));

function hourTracker() {

  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
     $(this).addClass("past");
     $(this).removeClass("future");
     $(this).removeClass("present");
    }

    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }

    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs();
  $ ("#currentDay" ).text(currentDate.format('dddd, MMMM DD'));
  hourTracker();
});
