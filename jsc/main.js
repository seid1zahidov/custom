var input = document.getElementById('myInput');

input.addEventListener('keydown', function(event) {
const key = event.key;
if (key === "Backspace") {

  alert(key);
  return false;
}
});