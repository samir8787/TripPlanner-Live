
let modelFactory = function (defaultDay = 0) {

  function addDays(qty = 1) {
    for (let i = 0; i < qty; i++) {
      let newDay = new Day();
      this.days.push(newDay);
      $.post('api/days', {
        number: this.days.length,
        hotel: newDay.hotel,
        restaurants: newDay.restaurants,
        activities: newDay.activities,
      })
        .then(function (response) {
          console.log("response", response);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }

  function load(){
    tripplanner.getDays().then(function (days) {
      days.forEach(function(day){
        let newDay = new Day(day);
        tripplanner.model.days.push(newDay)
      })

    });
  }

  function removeDay(dayNum){
    this.days.splice(dayNum-1,1);
    this.displayDay -= 1;
  }

  function currentDay(){
    return this.days[this.displayDay - 1];
  }

  return {
    days: [],
    displayDay: 1,
    addDays: addDays,
    load: load,
    removeDay: removeDay,
    currentDay: currentDay
  }
};



function Day(data) {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
  if (data){
    if (data.hotelId) this.hotel[0] = data.hotelId;
  }
}

Day.prototype.addItineraryItem = function (type, name, id) {
  console.log(type, name, id);
  if (type === 'hotel') {
    this[type][0] = {name: name};
    $.ajax({
      method: 'PUT',
      url: '/api/days/' + tripplanner.model.displayDay,
      data: {
        hotelId: id
      }
    }).then(function (response) {
      console.log(response)
    }).catch(function (err) {
        console.log(err)
      }
    )
  } else {
    this[type].push({name: name})
  }
};



Day.prototype.save = function () {
  $.ajax('api/days', {
    number: this.days.length,
    hotel: newDay.hotel,
    restaurants: newDay.restaurants,
    activities: newDay.activities,
  })
    .then(function () {
    })
    .catch(function(err){
      console.log(err);
    });
};
