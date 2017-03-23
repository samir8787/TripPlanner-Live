

let optionPanelFactory = function() {
  const optionPanel = $('#options-panel');
  const hotelChoices = $('select[data-type="hotel"]');
  const restaurantChoices = $('select[data-type="restaurant"]');
  const activityChoices=  $('select[data-type="activity"]');

  let loadOptions = function (select, promise){
    promise.then(function(data){
      data.forEach(function(data){
        select.append(`<option data-value="${data.id}">${data.name}</option>`)
      })
    })
      .catch(function(err){
        console.log(err)
      });
  };

  let attachOptionHandler = function () {
    optionPanel.on('click', 'button', function () {
      let addButton = $(this);
      let selectDropdown = addButton.prev();
      let attractionType = addButton.data('type');
      let attractionName = selectDropdown.val();
      let attractionId = selectDropdown.find(':selected').data('value');
      tripplanner.model.currentDay().addItineraryItem(attractionType, attractionName, attractionId);
      tripplanner.itineraryPanel.display();
    });
  };

  return {
    load: function () {
      loadOptions(hotelChoices, tripplanner.hotels);
      loadOptions(restaurantChoices, tripplanner.restaurants);
      loadOptions(activityChoices, tripplanner.activities);
      attachOptionHandler()
    }
  }
};



