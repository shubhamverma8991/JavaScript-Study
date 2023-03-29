console.log("merge two array while loop");
let data1 = [9999, 8, 100, 6, 5, 4, 3, 2, 1];
let data2 = [545, 87, 65, 7, 500, 121];
// let data1 = [3, 7, 12, 34, 56, 90];
// let data2 = [4, 9, 25, 45];
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
  console.error(d1);
}
while (d1 < data1.length) {
  data3[d3] = data1[d1];
  d1++;
  d3++;
}
while (d2 < data2.length) {
  data3[d3] = data2[d2];
  d2++;
  d3++;
}
console.warn(data3);
