const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
  pass: /^.{8,20}$/, // 8 a 20 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');
/* const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#pass'); */
const inputCheck = document.querySelector('#check');
const btnSubmit = document.querySelector('input[type=submit]');

form['status'] = {
  name: false,
  email: false,
  pass: false,
  check: false
};

function validate(form) {
  return form.status
}

const validateCamp = (input) => {
  const id = input.id;
  const expressions = expresiones[id];

  if (expressions.test(input.value)) {
    input.classList.remove('error');
    document.querySelector(`.errorText_${id}`).classList.remove('active')
    input.form['status'][id] = true;
  } else {
    input.classList.add('error');
    document.querySelector(`.errorText_${id}`).classList.add('active')
    input.form['status'][id] = false;
  }
}

form.addEventListener("change", function (e) {
  e.preventDefault();
  const input = e.target;
  const form = input.parentElement;
  if (validate(form)) {
    btnSubmit.classList.remove('disableBtn');
  }

});

function validateInput() {
  if (validate(form).name && validate(form).email && validate(form).pass && inputCheck.checked) {
    btnSubmit.classList.remove('disableBtn');
  } else {
    btnSubmit.classList.add('disableBtn');
  }
}
// Esquema para los inputName, inputEmail, inputPass
/* inputPass.addEventListener("keyup", function (e) {
  const input = e.target;
  validateCamp(input);
  const form = input.form;
  validateInput()
}); */
//OJO
inputs.forEach((input) => {
  input.addEventListener('keyup', function (e) {
    const input = e.target;
    validateCamp(input);
    validateInput()
})

inputCheck.addEventListener("click", function (e) {
  validateInput()
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.message').classList.add('active')
  setTimeout(() => {
    document.querySelector('.message').classList.remove('active')
  }, 2000)
  form.reset();
});

})