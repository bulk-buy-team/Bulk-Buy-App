const form = document.querySelector('form')
const submit = document.querySelector('.submit')
const comfirmPasswrd = document.getElementById('comfirmPasswrd')
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("ul");


hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("mobile-nav-list");
})


//simple fumctiom for comaping passwords 
//has not been properly implemented
/*function comparePassword(pswrd1 , pswrd2){
  
}

comfirmPasswrd.addEventListener('keydown', (e) => {
  const formData = new FormData(form)
  let confirmPswrd = formData.get('comfirmPasswrd')
  let password = getFormData().password;
  
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

submit.addEventListener('submit', (e) => {
  const formData = new FormData(form);
  let firstName = formData.get('firstName');
  let lastName = formData.get('lastName');
  let email = formData.get('email');
  let password = formData.get('password');
  let confirmpswrd = formData.get('comfirmPasswrd');

  if(confirmPswrd === password){
    axios.post('/endpoint',{
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data)
      window.location.href = '/otp.html'
    })
  }else{
    alert("not the same")
  }
 })*/