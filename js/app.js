//function to create an array with 1000 shuffled numbers
(function numGenerator () {
	var numArray = []; //create empty array to hold 1000 numbers

	//create and push numbers into the array
	for (var i = 1; i <= 1000; i++) {
		numArray.push(i);
	}

	shuffleArray(numArray); //shuffle the numbers in the array 
	numArray = numArray.join(", ")

	document.write("<p>" + numArray + "</p>");
})();


//function to shuffle numbers in an array
function shuffleArray (genArray) {

	for (var i = genArray.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = genArray[i];
			genArray[i] = genArray[j];
			genArray[j] = temp;
	
		
	}
	return genArray;
}