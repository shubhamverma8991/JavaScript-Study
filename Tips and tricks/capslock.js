console.log("Check caps lock ");

var password = document.getElementById("text");

password.addEventListener("keyup", function (e) {
  if (e.getModifierState("CapsLock")) {
    console.log("Caps lock is on");
  } else {
    console.log("caps lock off");
  }
});
