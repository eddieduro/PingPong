
var pingPong = function(num) {
  var ping = "ping";
  var pong = "pong";
  var pingpong = "Ping Pong";
  var values = [];

  for(var i = 1; i <= num; i++) {
     if (i % 15 === 0) {
        values.push(pingpong);
      } else if (i % 3 === 0) {;
        values.push(ping);
      } else if (i % 5 === 0) {
         values.push(pong);
      } else {
        values.push(i);
      }
    var final = values.join(', ');
  }
  return final;  
}
	

$(document).ready(function(){
  $('form#pingpong').submit(function(event){
    var num = parseInt($('input#number').val());
    var results = pingPong(num);


      $('#results').append('<p class="text-center">' + results + '</p>');
      $('.btn-refresh').toggle();
      $('.btn-submit').toggle();
    event.preventDefault();
  });

  $('.btn-refresh').click(function(){
    window.location.reload();
  });

});