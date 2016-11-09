$(function() {

  var mySelect = $('#hotel-choices');
  $.each(hotels, function(val, text) {
      mySelect.append(
          $('<option></option>').val(text.id).html(text.name)
      );
  });

  var selectRestaurant = $('#restaurant-choices');
  $.each(restaurants, function(val, text) {
      selectRestaurant.append(
          $('<option></option>').val(text.id).html(text.name)
      );
  });

  var selectActivities = $('#activity-choices');
  $.each(activities, function(val, text) {
      selectActivities.append(
          $('<option></option>').val(text.id).html(text.name)
      );
  });

  $addHotel=$('.hotel-add button')
  $addHotel.on('click',function(){
    var $myHotel=$('#hotel-choices option:selected').text()
    var $iHotel=$('#my-itinerary #hotel-choice .itinerary-item')
    .append([$('<li></li>').html($myHotel),('<button>x</button><br>')])
  })

  $addRestaurant=$('.restaurant-add button')
  $addRestaurant.on('click',function(){
    var $myRestaurant=$('#restaurant-choices option:selected').text()
    var $iRestaurant=$('#my-itinerary #restaurant-choice .itinerary-item')
    .append([$('<li></li>').html($myRestaurant),('<button>x</button><br>')])
  })

  $addActivity=$('.activity-add button')
  $addActivity.on('click',function(){
    var $myActivity=$('#activity-choices option:selected').text()
    var $iActivity=$('#my-itinerary #activity-choice .itinerary-item')
    .append([$('<li></li>').html($myActivity),$('<button>x</button><br>')])
  })
  
});
