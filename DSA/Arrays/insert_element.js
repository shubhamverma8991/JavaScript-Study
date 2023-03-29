let data = [1, 4, 5, 7, 8, 9];

// Insert at SomePosition by Using Own Logic
// By hardcoding
let newEl = 91;
let position = 3;

for (let index = data.length - 1; index >= position; index--) {
  if (index >= position) {
    data[index + 1] = data[index];
    if (index == position) {
      data[index] = newEl;
    }
  }
}
console.log(data);

// By taking data from user
var newarr = [1, 11, 45, 78, 58];
document.write(`<br><br> "Old Array " ${newarr}`);
function submit() {
  let el = document.getElementById("element").value;
  let pos = document.getElementById("position").value;
  console.log(el, pos);

  for (let i = newarr.length - 1; i >= 0; i--) {
    if (i >= pos) {
      newarr[i + 1] = newarr[i];
      if (i == pos) {
        newarr[i] = parseInt(el);
      }
    }
  }
  if (pos == newarr.length) {
    newarr[newarr.length] = el;
  }
  //   console.log(newarr);
  document.write(`<br><br> "New Array " ${newarr}`);
}

// By JS Predefined Method ie Splice
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.splice(1, 2, 1000);
console.log(arr1);
