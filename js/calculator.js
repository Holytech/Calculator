const inp = document.getElementById("inp");

const clear = document.getElementById("clear");
const back = document.getElementById("back");

const log = document.getElementById("log");
const per = document.getElementById("per");
const square = document.getElementById("square");
const square_root = document.getElementById("square_root");
const plus = document.getElementById("plus");

const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const zeros = document.getElementById("zeros");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let num1, num2;

clear.addEventListener("click", () => {
  inp.value = 0;
  dot.removeAttribute("disabled");
});
back.addEventListener("click", () => {
  const num = inp.value;
  const numlen = num.length;
  const n = numlen - 1;
  inp.value = inp.value.slice(0, n);
});

log.addEventListener("click", () => (inp.value = Math.log(inp.value)));
per.addEventListener("click", () => (inp.value /= 100));
square.addEventListener("click", () => (inp.value = inp.value ** 2));
square_root.addEventListener("click", () => (inp.value = Math.sqrt(inp.value)));

dot.addEventListener("click", () => {
  const val = inp.value;
  if (!val.includes(".")) {
    inp.value += ".";
  }
});
zeros.addEventListener("click", () => (inp.value += "00"));
zero.addEventListener("click", () => (inp.value += 0));
one.addEventListener("click", () => (inp.value += 1));
two.addEventListener("click", () => (inp.value += 2));
three.addEventListener("click", () => (inp.value += 3));
four.addEventListener("click", () => (inp.value += 4));
five.addEventListener("click", () => (inp.value += 5));
six.addEventListener("click", () => (inp.value += 6));
seven.addEventListener("click", () => (inp.value += 7));
eight.addEventListener("click", () => (inp.value += 8));
nine.addEventListener("click", () => (inp.value += 9));
