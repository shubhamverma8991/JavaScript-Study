console.log("UPPERlower");
// Not working try again
var str = "GreatPOwer";
var char;

for (let i = 0; i < str.length; i++) {
  char = str[i];
  //   console.log(char);
  if (char == char.toUpperCase()) {
    console.log(str[i].toLowerCase());
    str[i].toLowerCase();
  } else {
    str[i].toUpperCase();
  }
}
console.log(str);
