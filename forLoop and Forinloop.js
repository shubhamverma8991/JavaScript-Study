console.log("For Loop");

// ? For Loop
/*
let isPrime = true;
const number = parseInt(prompt("Enter a Number to Check its Prime or Not"));

if (number == 1) {
  console.alert("1 is not Prime nor Composite");
} else if (number > 1) {
  for (let index = 2; index < number; index++) {
    if (number % index == 0) {
      isPrime = false;
      break;
    }
  }
}
else{
  console.log("Number is not a Prime");
}

if (isPrime) {
  console.log(number + " is Prime");
} else {
  console.log(number + " not Prime");
}
*/

// ? FOr in Loop
let obj = {
  harry: 90,
  shubh: 70,
  shivika: 40,
  ritika: 57,
};

for (const a in obj) {
  // console.log(a); //Key only
  console.log(a + " = " + obj[a]); //value only
  // console.log(`Marks of ` + a + ` is ` + obj[a]);
}
