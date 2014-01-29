var Generator = {};

(function() {
	Generator.numGenerator = function(quantity) {
		var numArray = []; //create empty array to hold 1000 numbers

		//create and push numbers into the array
		for (var i = 1; i <= quantity; i++) {
			numArray.push(i);
		}

		for (var i = numArray.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = numArray[i];
			numArray[i] = numArray[j];
			numArray[j] = temp;
		}
		return numArray;
	};

	window.onload = function() {
		var buildArray = Generator.numGenerator(1000);
		numArray_str = buildArray.join("<br>");

		document.getElementById('main').innerHTML = '<p>' + numArray_str + '</p>';
	};
})();