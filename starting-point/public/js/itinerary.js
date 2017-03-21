"use strict";

console.log("Runned Itinerary.js");

function Itinerary(){
  this.days = [];
  this.displayDay = 1;
}

Itinerary.prototype.newDay = function () {
  this.days.push(new DayItinerary());
};

Itinerary.prototype.currentDay = function () {
  return this.days[this.displayDay-1];
};

Itinerary.prototype.render = function () {
  Object.keys(itinerary.currentDay()).forEach(function (category) {
    $('#my-'+category).empty();
    itinerary.currentDay()[category].forEach(function (item) {
      $('#my-'+category).append(itineraryItem(item));
    })
  })
};


function DayItinerary() {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
}

let itinerary = new Itinerary();
itinerary.newDay();


$('#itinerary').on('click', 'button', function () {
  ($(this).parent().remove())
});


function itineraryItem(title){
  return (' <div class="itinerary-item"><span class="title">'+title+'</span><button class="btn btn-xs btn-danger' +
  ' remove btn-circle">x</button></div>')
}

$('#options-panel').on('click', 'button', function () {
  let selectedItem = ($(this).prev());
  let dayItinerary = itinerary.days[itinerary.displayDay - 1];
  if (this.dataset.type == 'hotel'){
    dayItinerary.hotel[0] = selectedItem.val();
  } else {
    dayItinerary[this.dataset.type].push(selectedItem.val())
  }
  itinerary.render();
});

$('#day-add').on('click', function(){
  const buttonLength = ($(this).parent().children().length)
  $(this).before('<button class="btn btn-circle day-btn">'+buttonLength+'</button>');
});


