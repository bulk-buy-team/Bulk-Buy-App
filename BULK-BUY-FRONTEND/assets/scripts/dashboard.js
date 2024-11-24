const main = document.querySelector('.main-container')
const settings = document.querySelector('.settings')
let analysisBar = document.querySelector("#analysis-bar");
let pageTitle = document.querySelector('.page-title')
let faq = document.getElementById('faq')
let support = document.getElementById('support')

console.log("yo")

let paths = [
  {
    pathName: 'profile',
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

settings.addEventListener('click', () => {
  pageTitle.textContent = 'Settings'
  main.innerHTML = '';
  paths.forEach(item => {
    settingsPage(item.path,item.pathName,item.id)
  })
})

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