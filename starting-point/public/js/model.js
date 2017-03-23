
let modelFactory = function (defaultDay = 1) {
  return new Model(defaultDay)
};

function Model(defaultDays = 1){
  this.days = [];
  this.displayDay = 1;
  this.addDay(defaultDays);

}

Model.prototype.addDay = function (qty = 1) {
  for (let i = 0; i < qty; i++){
    let newDay = new Day();
    this.days.push(newDay);
    $.post('api/days', {
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
  }
};

Model.prototype.removeDay = function (dayNum) {
  this.days.splice(dayNum-1,1);
  this.displayDay -= 1;
};

Model.prototype.currentDay = function () {
  return this.days[this.displayDay - 1];
};


function Day() {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
}

Day.prototype.addItineraryItem = function (type, name) {
  if (type === 'hotel') {
    this[type][0] = {name: name};
  } else {
    this[type].push({name: name})
  }
}

