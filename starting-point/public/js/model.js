
let modelFactory = function (defaultDay = 1) {
  return new Model(defaultDay)
};

function Model(defaultDays = 1){
  this.days = [];
  this.currentDay = 1;
  this.addDay(defaultDays);

}

Model.prototype.addDay = function (qty = 1) {
  for (let i = 0; i < qty; i++){
    let newDay = new Day();
    this.days.push({});
    $.post('api/days', {})
      .then(function () {
        console.log('POST made')
      })
      .catch(function(err){
        console.log("error storing", err);
      });
  }
};

Model.prototype.removeDay = function (dayNum) {
  this.days.splice(dayNum-1,1);
  this.currentDay -= 1;
  itinerary.render()
};

Model.prototype.currentDay = function () {
  return this.days[this.currentDay - 1];
};


function Day() {
  this.hotel = [];
  this.restaurants = [];
  this.activities = [];
}

Day.prototype.addItineraryItem = function (type, name) {
  console.log(this);
  console.log(type);
  if (type == 'hotel') {
    this[type][0] = {name: name};
  } else {
    this[type].push({name: name})
  }
  itinerary.render()
};