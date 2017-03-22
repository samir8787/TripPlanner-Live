"use strict";

function Itinerary(defaultDays = 1) {
  this.days = [];
  this.displayDay = 1;
  this.addDay(defaultDays);

}

Itinerary.prototype.addDay = function (qty = 1) {
  for (let i = 0; i < qty; i++){
    this.days.push(new DayItinerary());
  }
  this.render();
};

Itinerary.prototype.removeDay = function (dayNum) {
  this.days.splice(dayNum-1,1);
  this.displayDay -= 1;
  itinerary.render()
};

Itinerary.prototype.currentDay = function () {
  return this.days[this.displayDay - 1];
};

Itinerary.prototype.render = function (displayDay) {
   if(displayDay) this.displayDay = displayDay;

   // Re render all the day buttons
   $('.day-buttons').empty();
  this.days.forEach(function (day, idx){
   $('.day-buttons').append('<button class="btn btn-circle day-btn">' + (idx+1) + '</button>');
  });
   $('.day-buttons').append('<button class="btn btn-circle day-btn" id="day-add">+</button>');
   var day_button = $('.day-buttons').children()[this.displayDay-1]
   $(day_button).addClass('current-day')
   $('#day-title span')[0].textContent = "Day "+this.displayDay;

   // Re-render all the data for the display day
   Object.keys(this.currentDay()).forEach(function (category) {
    $('#my-' + category).empty();
    this.currentDay()[category].forEach(function (item) {
      $('#my-' + category).append(itineraryItem(item.name));
    })
  }, this)
};

function DayItinerary() {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
}

DayItinerary.prototype.addItineraryItem = function (type, name, location) {
  if (type == 'hotel') {
    this[type][0] = {name: name, location: location};
  } else {
    this[type].push({name: name, location: location})
  }
  itinerary.render()
};


let itinerary = new Itinerary(3);
itinerary.render();

$('#itinerary').on('click', 'button', function () {
  ($(this).parent().remove())
});


function itineraryItem(title) {
  return (' <div class="itinerary-item"><span class="title">' + title + '</span><button class="btn btn-xs btn-danger' +
    ' remove btn-circle">x</button></div>')
}

$('#options-panel').on('click', 'button', function () {
  let location = null;
  let options = $(this).prev().children();
  for (let i = 0; i < options.length; i++ ){
    if (options[i].textContent === $(this).prev().val()){
      location = options[i].dataset.location;
    }
  }

  itinerary.currentDay().addItineraryItem(this.dataset.type, $(this).prev().val(), location);
});

$('.day-buttons').on('click', 'button', function () {
  if (this.id === 'day-add') {
    itinerary.addDay();
  } else {
    itinerary.render(this.textContent);
  }
});

$('#day-title').on('click', 'button', function (){
  itinerary.removeDay(itinerary.displayDay)
});

