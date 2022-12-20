function stringSkipper(string, skip) {
  var output = "";
  if(string) {
    for(var index=0; index<string.length; index++) {
      if(index % skip === 0) {
        output += stringText[index];
      }
    }
    return output;
  } else {
    return false;
  }
}

var stringText = "This is a random string to check the program";
var skipValue = 3;

var outputString = stringSkipper(stringText, skipValue);
console.log(outputString);
