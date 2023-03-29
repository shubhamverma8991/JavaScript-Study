var input = "what is your name" + "Geeks for Geek";

let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var result = "";

for (let i = 0; i < input.length; i++) {
  if (!vowel.includes(input[i])) {
    result += input[i];
  }
}
console.log(result);
