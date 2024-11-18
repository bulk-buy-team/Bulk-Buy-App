const form = document.getElementById('form')
const submit = document.querySelector('.submit')
const inputs = document.querySelector(".input-container");



inputs.addEventListener("input", (e) => {
  const target = e.target;
  const val = target.value;
  
  /*
  if value entered is NOT A NUMBER
  this assign am empty string to the
  input
  */
  if (isNaN(val)) {
    target.value = "";
    return;
    }
    
  /*
  handles changing focud to the next.
  input field if the value of the current
  input field is not an empty string
  */
  if (val != "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
})

inputs.addEventListener("keyup", (e) => {
  const target = e.target;
  const key = e.key.toLowerCase();

  /*
  Handles deleting the value of the
  current input field and changing focus
  to the prev input field
  */
  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
})



submit.addEventListener('click', (e) => {
  e.preventDefault()
  //have not finished implementation
  const formData = new FormData(form);
  
})