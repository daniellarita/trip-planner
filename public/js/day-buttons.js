$(function() {
  $dayButtons=$('.day-buttons button')
  $dayButtons.on('click',function(){
      $(this).addClass('current-day').siblings().removeClass('current-day');
  })
});
