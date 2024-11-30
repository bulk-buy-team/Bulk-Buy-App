const main = document.querySelector('.main-container')
const settings = document.querySelector('.settings')
let analysisBar = document.querySelector("#analysis-bar");
let pageTitle = document.querySelector('.page-title')
let faq = document.getElementById('faq')
let support = document.getElementById('support')
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


let paths = [
  {
    pathName: 'profile',
    path: 'profile.html',
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

settings.addEventListener('click', () => {
  pageTitle.textContent = 'Settings'
  main.innerHTML = '';
  paths.forEach(item => {
    settingsPage(item.path,item.pathName,item.id)
  })
})
