console.log("Linear Search");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 15];
// console.log(arr.length); //21

// Custom Algorithm
// Hardcoded

let el = 15;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === el) {
    found = true;
    console.log("Index value is " + i);
  }
}
// console.log("Not Found");
function submit() {
  let element = parseInt(document.getElementById("Search").value);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      console.log("New Index value is " + i);
    }
  }
}

// Pre defined Method

let try1 = [20, 30, 40, 50, 7, 09, 1, 10, 1];
console.log(try1.includes(20)); //true
console.log(try1.indexOf(1)); //6
console.log(try1.lastIndexOf(1)); //8
