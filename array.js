console.log("Array");

// Method 1 to create Array
var newArr = ["Shubham", "verma", "8991"];

// Method 2 to create Array
var newArr1 = new Array("hi", "i", "am", "Array");
console.log(newArr1);

newArr.unshift("beast"); //on first
newArr.push("bgl"); //on last
console.log(newArr);
newArr.shift(); //first remove
console.log(newArr);
newArr.pop(); //last remove
console.log(newArr);

// Array Mellthod

console.log(newArr.indexOf("8991"));
console.log(newArr.includes("hi"));
console.log(newArr1.includes("hi"));
