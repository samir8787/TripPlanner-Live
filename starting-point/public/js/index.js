console.log("running index.js")

var div = function (title){
  return (' <div class="itinerary-item"><span class="title">'+title+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
}

$('#itinerary').on('click', 'button', function () {
  ($(this).parent().remove())
});

$('#add-hotel').on('click', function () {
  if ($('#my-hotel').children().length > 0) {
    alert('You already selected a hotel');
  } else {
    $('#my-hotel').append(div($('#hotel-choices').val()))
  }
});
