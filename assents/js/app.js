
//navBarEffect
window.addEventListener("scroll", () => {
let nav = document.querySelector('nav')
nav.classList.toggle('rolls', window.scrollY > 150)
})

const btn = document.querySelector('.menu-btn')
const ul = document.querySelector('ul')
const nav = document.querySelector('nav')

btn.onclick = function (){
this.classList.toggle('active')
ul.classList.toggle('active')
nav.classList.toggle('barra-black')
}

document.querySelector('.img-logo').addEventListener('click', () => {
nav.classList.remove('barra-black')
})



// Event WINDOW position 

const menuItens = document.querySelectorAll('nav ul a[href^="#"]')

menuItens.forEach(item => {
item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick (event) {
event.preventDefault()
const to = getScrollTopByHref(event.target) - 80     

scrollToPosition(to)
ul.classList.remove('active')
btn.classList.remove('active')
}

function scrollToPosition (to) {
window.scroll({
top: to,
behavior:"smooth",
})
}

function getScrollTopByHref (element) {
const id = element.getAttribute('href')
return document.querySelector(id).offsetTop
}


//Modal

const modalContainer = document.querySelector(".modal-container")
const paginaUm = document.querySelector(".form-wrap-1")
const paginaTres = document.querySelector(".form-wrap-3")
const paginaQuatro = document.querySelector(".form-wrap-4")
const cabelo = document.querySelector(".box_avatar_cabelo")
const barba = document.querySelector(".box_avatar_barba")
const kids = document.querySelector(".box_avatar_kids")
const optioncabelo = document.querySelector(".form-option-1")
const optionbarba = document.querySelector(".form-option-2")
const optionkids = document.querySelector(".form-option-3")
const progressUm = document.querySelector(".bgcolor-1")
const progressDois = document.querySelector(".bgcolor-2")
const progressTres = document.querySelector(".bgcolor-3")

const btnclose = document.querySelector(".close-modal")
const modal = document.querySelector('.modal')
const modalEnd = document.querySelector('.modal-end')

window.addEventListener('click', (e) =>{
if(e.target == modalContainer){
modalContainer.classList.remove('active')
window.location.reload(true);
}}) 

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalContainer.classList.remove('active')
    modalEnd.classList.remove('active')
    window.location.reload(true);
  }
})

btnclose.addEventListener("click", () => {
modalContainer.classList.remove('active')
window.location.reload(true);
})

function openModal (){
modalContainer.classList.add('active')
modal.classList.add('active')
}


cabelo.addEventListener("click", () => {
paginaUm.style.display = 'none'
optioncabelo.style.display = 'flex'
progressUm.style.backgroundColor= '#e0a327'
})

barba.addEventListener("click", () => {
paginaUm.style.display = 'none'
optionbarba.style.display = 'flex'
progressUm.style.backgroundColor= '#e0a327'
})

kids.addEventListener("click", () => {
paginaUm.style.display = 'none'
optionkids.style.display = 'flex'
progressUm.style.backgroundColor= '#e0a327'
})


function back () {
optioncabelo.style.display ='none'
optionbarba.style.display ='none'
optionkids.style.display ='none'
paginaUm.style.display ='flex'
progressUm.style.backgroundColor= '#5f9ea079'
}

function next () {
optioncabelo.style.display ='none'
optionbarba.style.display ='none'
optionkids.style.display ='none'
paginaTres.style.display ='flex'
progressDois.style.backgroundColor= '#e0a327'
}

function backdois () {
paginaTres.style.display = 'none'
paginaUm.style.display ='flex'
progressDois.style.backgroundColor= '#5f9ea079'
progressUm.style.backgroundColor= '#5f9ea079'
}

function nextquatro () {
paginaTres.style.display ='none'
paginaQuatro.style.display ='flex'
progressTres.style.backgroundColor= '#e0a327'
}

function backtres () {
paginaTres.style.display = 'flex'
paginaQuatro.style.display ='none'
progressTres.style.backgroundColor= '#5f9ea079'
}

function nextfinals () {
modal.style.display ='none'
paginaQuatro.style.display ='none'
progressTres.style.backgroundColor= '#5f9ea079'
modalEnd.style.display='flex'
}


//validation Form horous Modal

function isNextDados () {
  let isSelect = document.querySelectorAll('select')
  let btnNext_date = document.querySelector('.next-date')
  btnNext_date.disabled = true
  
  if(btnNext_date.disabled === true) {
    btnNext_date.style.cursor='no-drop'
  } 
  
  for (i = 0; i <isSelect.length; i++) {
    isSelect[2].addEventListener('input',() => {
      let values = []
      isSelect.forEach(v => values.push(v.value))
      btnNext_date.disabled = values.includes('')
      btnNext_date.style.cursor ='pointer'
    })
  }
}

isNextDados()

//Validation Form data Modal

const form  = document.getElementById('container-info-data')
const campos = document.querySelectorAll('.required')
const spans  = document.querySelectorAll('.msg-erro')
const emailRegex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


function setError(index) {
campos[index].style.border = '2px solid red'
spans[index].style.display = 'flex'
}

function removeError(index) {
campos[index].style.border = ''
spans[index].style.display = 'none'
}

function nameValidate() {  

if(campos[0].value.length < 3){
setError(0)
} 
else {
removeError(0)
}
}

function emailValidate() {  
if(!emailRegex.test(campos[1].value)){
setError(1)
} 
else {
removeError(1)
}
}


new Cleave ('#cpf', {
delimiters: ['.','.','-'],
blocks: [3, 3, 3, 2],
numericOnly: true
})

function cpfValidate() {  
if(campos[2].value.length === 14){
removeError(2)
} 
else {
setError(2)
}
}


new Cleave ('#numer', {
delimiters: ['(',') ',' ','-'],
blocks: [0,2, 1, 4, 4],
numericOnly: true
})

function contatoValidate() {  
if(campos[3].value.length === 16){
removeError(3)
} 
else {
setError(3)
}
}

function isNextFinals () {
  let btnNext = document.querySelector('.next')
  btnNext.disabled = true
  
  if(btnNext.disabled === true) {
    btnNext.style.cursor='no-drop'
  }
  
  for (i = 0; i < campos.length; i++) {
    campos[3].addEventListener('input',() => {
      let values = []
      campos.forEach(v => values.push(v.value))
      btnNext.disabled = values.includes('')
      btnNext.style.cursor ='pointer'
    })
  }
}

isNextFinals()






// Mensseger modal finals

function seletando ()  {
    let selectHr = document.querySelector('#horas')
    let selectDia = document.querySelector('#data')
    let selectMes = document.querySelector('#mes')
    
    let optionHr = selectHr.options[selectHr.selectedIndex]
    let optionDia = selectDia.options[selectDia.selectedIndex]
    let optionMes = selectMes.options[selectMes.selectedIndex]
    
    let valueHr = optionHr.text
    let valueDia = optionDia.value
    let valueMes = optionMes.text
    
    document.querySelector('.msg-end').innerHTML=`Seu agendamento para o dia ${valueDia} de ${valueMes}, as ${valueHr}hr foi concluido com sucesso!!!!`
    }
    
   seletando()