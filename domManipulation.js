console.log("DOM");

document.querySelector(".democlass").textContent = "Hi from JS";
document.getElementById("demoid").innerText = "abra ka dabra";
// document.getElementById("demoid").innerHTML = "<h1>abra ka dabra</h1>";
document.getElementById("demoid").innerHTML = "";

//
document.querySelector("#inputtext").value = "Input Text from JS";

// CLick event
var Element = document.getElementById("demoid");
Element.addEventListener("click", myFunction);
function myFunction() {
  console.log("clicke para");
}
