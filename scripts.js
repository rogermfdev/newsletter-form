
import ValidateEmail from "./validations.js";

const form = document.getElementById("form"); // Agrega un id al formulario
const error = document.querySelector('#error');


form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Enviado");
  const input = document.querySelector('input[type="text"]');
  const valor = input.value;
  if (ValidateEmail(valor)) {
    localStorage.setItem('emailValue', valor); // Almacenar el valor en el almacenamiento local
    console.log("Correo electrónico válido");
      window.location.href = 'sucess.html';
  } else {
    console.log("Correo electrónico inválido");
    error.style.display = "block";
   }
});


const input = document.querySelector('input[type="text"]');

input.addEventListener('input', function(event) {
  const valor = event.target.value;
  console.log('El valor ha cambiado:', valor);
  error.style.display = "none";

});

