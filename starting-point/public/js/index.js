
let tripPlannerModule =  function(){

  let hotelChoices = $('selector[data-type="hotel"]');

  let getHotels = function () {
     return $.get('/api/hotels')
      .then( function (hotels) {
          return hotels;
        }
      )
      .catch(function (err) {
        console.log(err)
      })
  };

  let getRestaurants = function () {
    return $.get('/api/restaurants')
      .then( function (restaurants) {
          return restaurants;
        }
      )
      .catch(function (err) {
        console.log(err)
      })
  };


  let getActivities = function () {
    $.get('/api/activities')
      .then( function (activities) {
          return activities;
        }
      )
      .catch(function (err) {
        console.log(err)
      })
  };

  let loadHotels = function () {
    getHotels()
      .then(function (hotels) {
      })
  };

  return {
    loadPage: function () {
      console.log('Load all the options');
      console.log(hotelChoices);
      loadHotels()
    }
  }

};

let tripplanner = tripPlannerModule();
tripplanner.loadPage();
