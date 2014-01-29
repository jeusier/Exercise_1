describe("Random Number Generator", function() {

	// page should have 1000 numbers
	it("should generate 1000 numbers", function() {
		var random_numbers = Generator.numGenerator(1000);

		expect(random_numbers.length).toEqual(1000);
	});
	// numbers should be random
	it("numbers should be shuffled", function() {
		var firstBatch = Generator.numGenerator(500);
		var secondBatch = Generator.numGenerator(1000);

		expect(firstBatch[0]).not.toBe(secondBatch[0]);
		expect(firstBatch[69]).not.toBe(secondBatch[69]);
		expect(firstBatch[102]).not.toBe(secondBatch[102]);
		expect(firstBatch[500]).not.toBe(secondBatch[500]);
	});
});