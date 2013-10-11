exports.findMiddle = function(i) {
	
	var myString = i.toString();

	if (myString.length < 3) {
		return("Test Value: " + myString + " contains an Invalid length.")
	}
	else {
		var mid = myString.length / 2;
		var results = myString.substring(mid - 1, mid + 2);
		return(results);
	}
};