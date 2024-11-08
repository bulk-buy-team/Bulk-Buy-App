console.log("OTP")
const form = document.getElementById('form')
const submit = document.querySelector('.submit')


const inputs = document.querySelectorAll('.otp-container input');

// facing a weird bug so function is not working properly
inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (index > 0) {
        input.value = "";
        inputs[index - 1].focus();
      }
    } else if (e.key >= '0' && e.key <= '9') {
      input.value = e.key;
      inputs[index + 1].focus();
      // if (index < inputs.length - 1) {
//         inputs[index + 1].focus();
//       }
    } else {
      e.preventDefault();
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData('Text').trim();
    if (pastedValue.length === 4) {
      const values = pastedValue.split('');
      inputs.forEach((input, index) => {
        input.value = values[index];
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
    }
  });
});


submit.addEventListener('click', (e) => {
  e.preventDefault()
  //have not finished implementation
  const formData = new FormData(form);
  
})