var parameterLimitCharacters = 140;
var regressive = 0;
document.getElementById('button').disabled = true;


window.addEventListener('load', function(event) {
  var button = document.getElementById('button');

  /* Evento en el Botón */
  button.addEventListener('click', function(event) {
    var textarea = document.getElementById('textarea');
    var textAreaText = textarea.value ;

    if (textAreaText !== '') {
      /* ubico área para crear elementos */
      var sectionDivs = document.querySelector('section');

      /* creación de elemento p y nodo texto text */
      var pVar = document.createElement('p') ;
      var text = document.createTextNode(textAreaText);

      /* verificar el tamaño de texto a guardar*/

      /* asignar hijos a elementos seleccionados */
      pVar.appendChild(text);
      sectionDivs.appendChild(pVar);

      textarea.value = '' ;
      regressive=0;
      label.textContent = regressive ;
      label.classList.remove('red', 'green', 'blue');
      label.classList.add('black');
    }
  });

  /* Evento Presión de Tecla */
  textarea.addEventListener('keypress', function(event) {
    var textAreaText = textarea.value;
    var label = document.getElementById('label');
    label.classList.remove('red', 'green', 'blue');
    label.classList.add('black');

    /* asigna la cantidad de caracteres  */
    if (textAreaText.length > 0) {
      document.getElementById('button').disabled = false;
      regressive = parameterLimitCharacters - textAreaText.length ;
      label.textContent = regressive ;
    }

    if (regressive > 130 && regressive <= 140) {
      label.classList.add('black');
    }

    if (regressive > 120 && regressive <= 130) {
      label.classList.add('red');
    }

    if (regressive <= 120 && regressive >= 0) {
      label.classList.remove('red');
      label.classList.add('blue');
    }

    if (regressive < 0) {
      label.classList.remove('blue');
      label.classList.add('green');
    }
  });
});
