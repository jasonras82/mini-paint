$(document).ready(function() {

var allBoxes = $('.box')
  .on('click', function(){
      $(this).addClass(color);
    })
  .on('dblclick', function(){
      $(this).removeClass(color);
    });

  $('#reset')
    .on('click', function(){
    allBoxes.removeClass();

  });

  $('#red').on('click', function() {
    color = 'red';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });


});
