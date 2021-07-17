// grab everything we need
let nome = document.querySelector('#name')
let email = document.querySelector('#email')
let duvida = document.querySelector('#duvida')
let labelnome = document.querySelector('#labelnome')
let labelemail = document.querySelector('#labelemail')
let labelduvida = document.querySelector('#labelduvida')
let validnome = false;
let validemail = false;

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function enviar(){
  if(validnome ==true && validemail ==true){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
      {
        nome: nome.value,
        email: email.value
      }
      )
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
      alert('sonho enviado')
      setTimeout(()=>{
        window.location.href = 'https://github.com/hana-bananaa'
      }, 3000)
  
    
  }
  else {
    alert('preencha os dados')
  }
}


nome.addEventListener('keyup', () => {
  if(nome.value.length <=2){
    labelnome.setAttribute('style','color:red')
    validnome = false;
} else {
  labelnome.setAttribute('style','color:green')
  validnome = true;
}
})

email.addEventListener('keyup', () => {
  if(email.value.length <=2){
    labelemail.setAttribute('style','color:red')
    validemail = false;
} else {
  labelemail.setAttribute('style','color:green')
  validemail = true;
}
})