const main = document.querySelector('.main-container')
const settings = document.querySelector('.settings')
let analysisBar = document.querySelector("#analysis-bar");
let pageTitle = document.querySelector('.page-title')
let faq = document.getElementById('faq')
let support = document.getElementById('support')
<<<<<<< HEAD
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let noOfUnits = document.querySelectorAll('.unit-no');
console.log("yo");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', ()=>{
    noOfUnits[i].value++;
  })
  
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', ()=>{
    if(noOfUnits[i].value > 0) {
      noOfUnits[i].value--
    }
    });
}

=======

console.log("yo")
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66

let paths = [
  {
    pathName: 'profile',
<<<<<<< HEAD
    path: 'profile.html',
=======
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
    id: 'profile'
  },
  {
    pathName: 'FAQ',
    id: 'faq'
  },
  {
    pathName: 'Support',
    id: 'support'
  },
  {
    pathName: 'logout',
    id: 'logout'
  }
]




analysisBar.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

function showRangeProgress(rangeVal) {
    rangeVal.style.setProperty('--range-width', rangeVal.value + '%');
    // console.log(rangeVal);
}

function settingsPage(path,pathName,id){
  let links = document.createElement('a')
  links.setAttribute('class','link')
  links.setAttribute('id',`${id}`)
  links.setAttribute('href',`${path}`)
  links.textContent = `${pathName}`
  main.appendChild(links)
}
<<<<<<< HEAD
=======
// function supportPage(){
//   let faq = document.createElement('div')
//   faq.setAttribute('class','coming-soon')
//   main.appendChild(faq)
//   let text = document.createElement('h2')
//   text.textContent = `Comimg soon`
//   faq.appendChild(text)
// }
// 
// function faqPage(){
//   let faq = document.createElement('div')
//   faq.setAttribute('class','coming-soon')
//   main.appendChild(faq)
//   let text = document.createElement('h2')
//   text.textContent = `Comimg soon`
//   faq.appendChild(text)
// }
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66

settings.addEventListener('click', () => {
  pageTitle.textContent = 'Settings'
  main.innerHTML = '';
  paths.forEach(item => {
    settingsPage(item.path,item.pathName,item.id)
  })
})
<<<<<<< HEAD
=======

// faq.addEventListener('click', () => {
//   pageTitle.textContent = 'FAQs'
//   main.innerHTML = '';
//   faqPage()
// })
// 
// support.addEventListener('click', () => {
//   pageTitle.textContent = 'FAQs'
//   main.innerHTML = '';
//   faqPage()
// })
>>>>>>> baf767034e60dcb30d9ad75dbe97094de7f0df66
