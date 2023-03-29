console.log("Array 2");

const arr = [4, 9, 16];
// Destructuring
const [a, b, c] = arr;
console.log(a, b, c);

// Map Function
const newArr = arr.map(Math.sqrt);
console.log(newArr);

// New Try
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const newPerson = (document.getElementById("demoid").innerHTML =
  persons.map(getFullName));

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ") + "</br>";
}
console.log(newPerson);
