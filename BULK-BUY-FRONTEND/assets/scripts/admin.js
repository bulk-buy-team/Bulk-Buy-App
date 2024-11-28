const addNewitem = document.querySelector('.add-new')
const form = document.getElementById('form')

istrue = false;
addNewitem.addEventListener('click', () => {
  istrue = !istrue;
  if(istrue){
    addNewitem.textContent = '-'
    form.style.display = "block"
  }
  else{
    addNewitem.textContent = '+'
    form.style.display = "none"
  }
})