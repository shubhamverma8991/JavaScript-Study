console.log("check if an object is an array or not?");

var arr = [1, 2, 3, 4, 5, 6];
var str = "shubham";
//     Object.prototype.toString.call(str)
if (Object.prototype.toString.call(str) == "[object Array]") {
  console.log(true);
} else {
  console.log(false);
}
