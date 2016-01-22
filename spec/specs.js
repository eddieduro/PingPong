describe('pingPong', function() {
	it('will return ping for numbers divisible by 3', function(){
		expect(pingPong(3)).to.equal("ping");
	});

	it('will return pong for numbers divisible by 5', function(){
		expect(pingPong(5)).to.equal("pong");
	});
});