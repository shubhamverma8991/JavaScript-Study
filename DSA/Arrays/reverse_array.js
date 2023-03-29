console.log("reverse array");

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Predefined Method
// arr1.reverse();
// console.log(arr1);

let newarr = [];
// Custom Algorithm
i = 0;
for (let index = arr1.length - 1; index >= 0; index--) {
  newarr[i] = arr1[index];
  i++;
}
console.log("reverse" + newarr);
