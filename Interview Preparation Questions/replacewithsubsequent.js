console.log(
  "Write a program to transform strings of lowercase alphabet characters by replacing each letter with the subsequent character in the english alphabet"
);

var name = "hello";
var newName = [];
for (let index = 0; index < name.length; index++) {
  console.log(name[index]);
  let ascii = 0;
  ascii = name.charCodeAt(index) + 1;
  console.log(ascii);
  //   ascii++;
  newName.push(String.fromCharCode(ascii));
}
console.log(newName.toString().replaceAll(",", ""));
