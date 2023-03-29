console.log("Reverse String");

var name = "Shubham";

var newName = [];
for (let i = name.length - 1; i >= 0; i--) {
  newName.push(name[i]);
}
str1 = newName.toString();
console.log(str1.replaceAll(",", ""));
