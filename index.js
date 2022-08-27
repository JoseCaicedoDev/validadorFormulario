const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,20}$/, // 8 a 20 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');

const campos ={
  name: false,
  email: false,
  pass: false
}

const validateForm = (e) =>{
  switch(e.target.name){
    case 'nombre':
      validateCamp(expresiones.nombre, e.target, "name")
      break
      case 'email':
      validateCamp(expresiones.correo, e.target, "email")
      break
      case 'pass':
      validateCamp(expresiones.password, e.target, "pass")
      break
  }
}

const validateCamp = (expressions, input, camp ) =>{
  if (expressions.test(input.value)) {
    document.querySelector(`#${camp}`).classList.remove('error');
    document.querySelector(`.errorText_${camp}`).classList.remove('active')
    campos[camp] = true
  } else {
    document.querySelector(`#${camp}`).classList.add('error');
    document.querySelector(`.errorText_${camp}`).classList.add('active')
    campos[camp] = false
  }
}
inputs.forEach((input)=>{
  input.addEventListener('keyup', validateForm)
  input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const terminos = document.querySelector('#check')
  if(campos.name && campos.email && campos.pass && terminos.checked){
    form.reset()
    document.querySelector('.message').classList.add('active')
    document.querySelector('.messageError').classList.remove('active')
    //document.querySelector('input[type="submit"]').classList.remove('disableBtn')
    setTimeout(()=>{
      document.querySelector('.message').classList.remove('active')
    },3000)
  }else{
    document.querySelector('.messageError').classList.add('active')
  }
})
