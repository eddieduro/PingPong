describe('pingPong', function() {
	it('will return ping for numbers divisible by 3', function(){
		expect(pingPong(3)).to.equal("1, 2, ping");
	});

	it('will return pong for numbers divisible by 5', function(){
		expect(pingPong(5)).to.equal("1, 2, ping, 4, pong");
	});

	it('will return ping pong for numbers divisible by 15', function(){
		expect(pingPong(15)).to.equal("1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, Ping Pong");
	});

	it('will return user input for numbers that are not divisible by 3, 5, or 15', function(){
		expect(pingPong(1)).to.be.ok;
	});
});
