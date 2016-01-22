var pingPong = function(num) {
	if(num % 15 === 0) {
		return "Ping Pong"
	} else if(num % 3 === 0){
		return "ping";
	} else if (num % 5 === 0) {
		return "pong";
	} else {
		return num;
	}
}