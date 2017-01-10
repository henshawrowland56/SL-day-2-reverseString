/*
	HENSHAW ROWLAND
*/
module.exports = {
	 reverseString: function(str) {
  		var reversedString = "";
  		if(str.length < 1){return null;}
  		for(var i = str.length - 1; i>=0; i--){
    		reversedString += str[i];
  		}
  		if(reversedString === str){return true;}
  		return reversedString;
	}
}