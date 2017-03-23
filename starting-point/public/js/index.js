
let tripPlannerModule =  function(){


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

  let getDays = function () {
    return getResource('days')
  };



  return {
    model: modelFactory(1),
    optionsPanel: optionPanelFactory(),
    itineraryPanel: itineraryPanelFactory(),
    getDays: getDays,
    loadPage: function () {
      this.hotels = getHotels();
      this.restaurants = getActivities();
      this.activities = getActivities();
      this.model.load();
      this.optionsPanel.load();
      this.itineraryPanel.load();

    },
  }
};


let tripplanner = tripPlannerModule();
tripplanner.loadPage();

