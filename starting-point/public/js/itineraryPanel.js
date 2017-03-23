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
      } else {
        itineraryPanel.display(button.textContent);
      }
    });
  }

  function setItineraryItemHandler() {
    itineraryPanel.on('click', 'button', function () {
      ($(this).parent().remove())
    });
  }

  function setRemoveDayHandler() {
    removeDayButton.on('click', 'button', function (){
      tripplanner.model.removeDay(tripplanner.model.currentDay);
      itineraryPanel.display(tripplanner.model.currentDay-1)
    });
  }


  return {
    load: function () {
      setDayButtonsHandler();
      setItineraryItemHandler();
      setRemoveDayHandler()
    },
    display: function (dayNum) {
        if(dayNum) this.currentDay = dayNum;

        // Create Day Buttons
        $('.day-buttons').empty();
        this.days.forEach(function (day, idx){
          $('.day-buttons').append('<button class="btn btn-circle day-btn">' + (idx+1) + '</button>');
        });
        $('.day-buttons').append('<button class="btn btn-circle day-btn" id="day-add">+</button>');
        var day_button = $('.day-buttons').children()[this.currentDay-1]
        $(day_button).addClass('current-day')
        $('#day-title span')[0].textContent = "Day "+this.currentDay;

        // Re-render all the data for the display day
        Object.keys(this.currentDay()).forEach(function (category) {
          $('#my-' + category).empty();
          this.currentDay()[category].forEach(function (item) {
            $('#my-' + category).append(itineraryItem(item.name));
          })
        }, this)
      }
  }
};



function itineraryItem(title) {
  return (' <div class="itinerary-item"><span class="title">' + title + '</span><button class="btn btn-xs btn-danger' +
  ' remove btn-circle">x</button></div>')
}





