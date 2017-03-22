
let tripPlannerModule =  function(){

  let hotelChoices = $('select[data-type="hotel"]');
  let restaurantChoices = $('select[data-type="restaurant"]');
  let activityChoices = $('select[data-type="activity"]');

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
    return $.get('/api/activities')
      .then( function (activities) {
          return activities;
        }
      )
      .catch(function (err) {
        console.log(err)
      })
  };

  let loadOptions = function (select, promise){
     promise.then(function(data){
      data.forEach(function(data){
        select.append('<option>'+data.name+'</option>')
      })
     })
     .catch(function(err){
        console.log(err)
      });
  };

  return {
    loadPage: function () {
      loadOptions(hotelChoices, getHotels())
      loadOptions(restaurantChoices, getRestaurants())
      loadOptions(activityChoices, getActivities())
    }
  }

};

let tripplanner = tripPlannerModule();
tripplanner.loadPage();
