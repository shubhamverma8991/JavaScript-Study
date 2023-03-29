console.log(
  "Write a program to print the desired character from a string or search a char in a string."
);

var name = "i am Shubham";
found = false;
var search = (char) => {
  name = name.toLowerCase();
  char = char.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (char.includes(name[i])) {
      //   console.log(true);
      found = true;
    }
  }
};
search("u");
console.log(found);
