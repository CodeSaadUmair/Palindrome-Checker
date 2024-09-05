const input = document.querySelector(".ip");
const text = document.querySelector(".txt");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});

function checkPalindrome() {
  const a = input.value.toLowerCase();
  const rev = stringReverse(a);

  if (a === rev) {
    text.innerHTML = " P A L I N D R O M E ";
    document.body.style.backgroundColor = "rgb(0,255,0)";
  } else {
    text.innerHTML = "N O";
    document.body.style.backgroundColor = "rgb(255,0,0)";
  }
  input.value = "";
}

function stringReverse(str) {
  return str.split("").reverse().join("");
}
