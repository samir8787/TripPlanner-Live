

let optionPanelFactory = function() {
  const optionPanel = $('#options-panel');
  const hotelChoices = $('select[data-type="hotel"]');
  const restaurantChoices = $('select[data-type="restaurant"]');
  const activityChoices=  $('select[data-type="activity"]');

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

  let attachOptionHandler = function () {
    optionPanel.on('click', 'button', function () {
      let addButton = $(this);
      let attractionType = addButton.data('type');
      let selectDropdown = addButton.prev();
      let attractionName = selectDropdown.val();
      tripplanner.model.currentDay().addItineraryItem(attractionType, attractionName);
    });
  };

  return {
    loadOptions: function () {
      loadOptions(hotelChoices, tripplanner.getHotels());
      loadOptions(restaurantChoices, tripplanner.getRestaurants());
      loadOptions(activityChoices, tripplanner.getActivities());
      attachOptionHandler()
    }
  }
};



