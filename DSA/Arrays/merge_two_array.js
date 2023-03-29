console.log("merge two array");

let arr = ["mango", "banana", "apple"];
let arr1 = [1, 2, 3, 4, 5, 7];
let newarr = [];
// Custom alog
for (let index = 0; index < arr.length; index++) {
  newarr[index] = arr[index];
  //   newarr.push(arr[index]); //predefined method
}
for (let index = 0; index < arr1.length; index++) {
  newarr[arr.length + index] = arr1[index];
  //   newarr.push(arr1[index]);  //predefined method
}
console.log(newarr);

// Predefined Method
let dummy = [...arr, ...arr1];
console.log("new");
console.log(dummy);
