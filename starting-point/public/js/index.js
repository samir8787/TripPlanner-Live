
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


  return {
    loadPage: function () {
      this.optionsPanel.loadOptions();
      // this.itineraryPanel.display(1);
    },
    model: modelFactory(3),
    optionsPanel: optionPanelFactory(),
    itineraryPanel: itineraryPanelFactory(),
    getHotels: getHotels,
    getRestaurants: getRestaurants,
    getActivities: getActivities
  }
};


let tripplanner = tripPlannerModule();
tripplanner.loadPage();

