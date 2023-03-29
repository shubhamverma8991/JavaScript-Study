var btn = document.querySelectorAll(".btn");
console.log(btn);
var tab = document.querySelectorAll(".tab");
console.log(tab);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    console.log("i" + tab[i]);
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("mainTabActive");
      tab[j].classList.add("mainTabInactive");
      console.log("j" + tab[j]);
    }
    tab[i].classList.remove("mainTabInactive");
    tab[i].classList.add("mainTabActive");
  });
}
