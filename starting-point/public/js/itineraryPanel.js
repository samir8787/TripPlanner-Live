"use strict";

let itineraryPanelFactory = function (){

  const itineraryPanel = $('#itinerary');
  const dayButtons = $('.day-buttons');
  const removeDayButton =  $('#day-title');


  function setDayButtonsHandler() {
    dayButtons.on('click', 'button', function () {
      const button = this;
      if (button.id === 'day-add') {
        tripplanner.model.addDay();
        tripplanner.itineraryPanel.display();
      } else{
      tripplanner.itineraryPanel.display(button.textContent);
      }
    });
  }

  function setItineraryItemHandler() {
    itineraryPanel.on('click', 'button', function () {
      ($(this).parent().remove())
      tripplanner.itineraryPanel.display(button.textContent);
    });
  }

  function setRemoveDayHandler() {
    removeDayButton.on('click', 'button', function (){
      tripplanner.model.removeDay(tripplanner.model.currentDay);
      tripplanner.itineraryPanel.display(tripplanner.model.currentDay-1)
    });
  }


  return {
    load: function () {
      setDayButtonsHandler();
      setItineraryItemHandler();
      setRemoveDayHandler();
      this.display();
    },
    display: function (dayNum) {
        if(dayNum) tripplanner.model.displayDay = dayNum;
        // Create Day Buttons
        $('.day-buttons').empty();
        tripplanner.model.days.forEach(function (day, idx){
          $('.day-buttons').append('<button class="btn btn-circle day-btn">' + (idx+1) + '</button>');
        });
        $('.day-buttons').append('<button class="btn btn-circle day-btn" id="day-add">+</button>');
        var day_button = $('.day-buttons').children()[tripplanner.model.displayDay-1]
        $(day_button).addClass('current-day')
        $('#day-title span')[0].textContent = "Day "+tripplanner.model.displayDay;

        // Re-render all the data for the display day
        Object.keys(tripplanner.model.currentDay()).forEach(function (category) {
          $('#my-' + category).empty();
          tripplanner.model.currentDay()[category].forEach(function (item) {
            $('#my-' + category).append(itineraryItem(item.name));
          })
        })
      }
  }
};



function itineraryItem(title) {
  return (' <div class="itinerary-item"><span class="title">' + title + '</span><button class="btn btn-xs btn-danger' +
  ' remove btn-circle">x</button></div>')
}





