console.log("running index.js");

$('#itinerary').on('click', 'button', function () {
  ($(this).parent().remove())
});


function itineraryItem(title){
  return (' <div class="itinerary-item"><span class="title">'+title+'</span><button class="btn btn-xs btn-danger' +
  ' remove btn-circle">x</button></div>')
}

$('#options-panel').on('click', 'button', function () {
  let selectedItem = ($(this).prev());
  let myListGroup = $('#my-'+this.dataset.type);
  if (this.dataset.type == 'hotel' && myListGroup.children().length > 0) {
    myListGroup.children()[0].remove();
  }
  myListGroup.append(itineraryItem(selectedItem.val()));
});

