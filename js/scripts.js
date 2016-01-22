var pingPong = function(num) {
  var ping = "ping";
  var pong = "pong";
  var pingpong = "Ping Pong";

	for(var i = 0; i < num; i++) {
		if(num % 15 === 0) {
		return pingpong;
		} else if(num % 3 === 0){
			return ping;
		} else if (num % 5 === 0) {
			return pong;
		} else {
			return num;
		}
	}
}

$(document).ready(function(){

});