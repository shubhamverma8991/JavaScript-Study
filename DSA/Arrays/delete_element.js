console.log("Delete Element");

// Custom Algorithm
// Harcodede
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var position = 2;
for (let index = position; index < arr.length - 1; index++) {
  arr[index] = arr[index + 1];
  //   const element = array[index];
}
arr.pop();
console.log(arr);

// Value from User
let newarr1 = [1, 2, 3, 4, 5];
console.log(newarr1);
function submit() {
  let posi = document.getElementById("position").value;
  //   Parse Int is required
  let position = parseInt(posi);
  for (let index = position; index < newarr1.length; index++) {
    newarr1[index] = newarr1[index + 1];
  }
  newarr1.pop();
  //   document.write(newarr1);
  console.log(newarr1);
}

// Predefined Method
let newarr2 = [1, 2, 3, 4, 5];
newarr2.splice(0, 1);
console.log(newarr2);
