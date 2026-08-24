const button = document.getElementById('btn');
let form = document.getElementById('contact')

button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form checked before sending!");
});

function changeText(){

document.getElementById('btn').textContent = 'We are open now!'
}

function changeBackground() {
document.body.style.backgroundColor = "lightblue"; }
