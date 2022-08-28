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
  pass: false,
}

const validateForm = (e) =>{
  switch(e.target.name){
    case 'nombre':
      validateCamp(expresiones.nombre, e.target, "name")
      console.log(campos)
      break
      case 'email':
      validateCamp(expresiones.correo, e.target, "email")
      console.log(campos)
      break
      case 'pass':
      validateCamp(expresiones.password, e.target, "pass")
      console.log(campos)
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
console.log(campos)

const terminos = document.querySelector('#check')
terminos.addEventListener('change', (e)=>{
  if (campos.name && campos.email && campos.pass && terminos.checked){
    //document.querySelector('input[type="submit"]').classList.remove('disableBtn')
    document.querySelector('.messageError').classList.remove('active')
  }else{
    document.querySelector('input[type="submit"]').classList.add('disableBtn')
  }
})

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log(validate())
/*   if(campos.name && campos.email && campos.pass && terminos.checked){
    form.reset()
    document.querySelector('.message').classList.add('active')
    document.querySelector('input[type="submit"]').classList.remove('disableBtn')
    setTimeout(()=>{
      document.querySelector('.message').classList.remove('active')
    },2000)
  }else{
    document.querySelector('.messageError').classList.add('active')
  } */
})

const validate = () => {
  return campos.name && campos.email && campos.pass && terminos.checked
}
console.log(validate())
console.log(campos)


