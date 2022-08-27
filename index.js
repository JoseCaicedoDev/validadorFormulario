const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,20}$/, // 8 a 20 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');


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
    case 'check':

    break
  }
}

const validateCamp = (expressions, input, camp ) =>{
  if (expressions.test(input.value)) {
    document.querySelector(`#${camp}`).classList.remove('error');
    document.querySelector(`.errorText_${camp}`).classList.remove('active')
  } else {
    document.querySelector(`#${camp}`).classList.add('error');
    document.querySelector(`.errorText_${camp}`).classList.add('active')
  }
}


inputs.forEach((input)=>{
  input.addEventListener('keyup', validateForm)
  input.addEventListener('blur', validateForm)
})

form.addEventListener('submit', (e) =>{
  e.preventDefault();
})
