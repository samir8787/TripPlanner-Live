
let tripPlannerModule =  function(){

  let hotelChoices = $('select[data-type="hotel"]');
  let restaurantChoices = $('select[data-type="restaurant"]');
  let activityChoices = $('select[data-type="activity"]');

  let getResource = function (resourceName) {
    return $.get(`/api/${resourceName}`)
      .then( function (data) {
          return data;
        }
      )
      .catch(function (err) {
        console.log(err)
      })
  };

  let getHotels = function () {
     return getResource('hotels')
  };

  let getRestaurants = function () {
    return getResource('restaurants')
  };


  let getActivities = function () {
    return getResource('activities')
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
      loadOptions(hotelChoices, getHotels());
      loadOptions(restaurantChoices, getRestaurants());
      loadOptions(activityChoices, getActivities());
    }
  }

};

let tripplanner = tripPlannerModule();
tripplanner.loadPage();
