console.log("Object");

const jonas = {
  name: "Shubham",
  lastname: "verma",
  dob: 1995,
  call: function (age) {
    console.log(age);
  },
};

// Add new Property in Object

// 1
jonas.location = "india";

// 2
jonas["social"] = "@facebook";

console.log(jonas);

console.log("functioncall" + jonas.call(1955));
// One Loop
for (const key in jonas) {
  if (jonas.hasOwnProperty(key)) {
    console.log(key + " = " + jonas[key]);
  }
}
console.log("");
// Second Loop
for (const a in jonas) {
  // console.log(a); //Key only
  console.log(a + " = " + jonas[a]); //value only
}

objectLenght = Object.keys(jonas).length;
console.log("Length" + objectLenght);
