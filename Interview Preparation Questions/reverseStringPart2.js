console.log("Reverse String");
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// Reverse Entire
console.log(reverseEntireSentence);

// Reverse Each Word
console.log(reverseEachWord);

var str = "my name is shubham";
// Full Reverse
// console.log((newstr = str.split("").reverse().join("")));

// Each Word Reverse only
// console.log(newstr.split(" ").reverse().join(" "));

function reverse(string, seperator) {
  return string.split(seperator).reverse().join(seperator);
}
var onerev = reverse(str, "");
console.log("one time reverse " + onerev);

// calling the old rev file again
console.log("second time rev" + reverse(onerev, " "));
