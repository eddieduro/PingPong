describe('pingPong', function() {
	it('will return ping for numbers divisible by 3', function(){
		expect(pingPong(3)).to.equal("ping");
	});

	it('will return pong for numbers divisible by 5', function(){
		expect(pingPong(5)).to.equal("pong");
	});

	it('will return ping pong for numbers divisible by 15', function(){
		expect(pingPong(15)).to.equal("Ping Pong");
	});

	it('will return user input for numbers that are not divisible by 3, 5, or 15', function(){
		expect(pingPong(1)).to.equal(1);
	})
});