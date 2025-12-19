const countValue = document.getElementById("count");
const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton");

let count = 0;

increaseButton.addEventListener("click", function () {
  count++;
  countValue.innerHTML = count;
});

resetButton.addEventListener("click", function () {
  count = 0;
  countValue.innerHTML = count;
});

decreaseButton.addEventListener("click", function () {
  count--;
  countValue.innerHTML = count;
}); 