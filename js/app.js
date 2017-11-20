var parameterLimitCharacters = 140;
var regressive = 140;
var countSpaces = 0;
var textAreaText = '';

window.addEventListener('load', function(event) {
  var button = document.getElementById('button');

  desactiveButton() ; /* llamar función de desactivar botón */

  /* Evento ingreso por teclado */
  textarea.addEventListener('keyup', function(event) {
    countSpacesText();
    textAreaText = textarea.value ;
    if (textAreaText !== '' && textAreaText.length !== countSpaces) {
      activeButton() ;
    } else {
      desactiveButton() ;
    }

    var textAreaText = textarea.value;
    var label = document.getElementById('label');
    regressive = parameterLimitCharacters - textAreaText.length;
    label.textContent = regressive ;

    /* controlo activación de botón mientras que contenido de texto no este vacío  */
    if (textAreaText.length > 0 && textAreaText.length <= 140) {
      activeButton() ; /* llamar función de activar botón */
      regressive = parameterLimitCharacters - textAreaText.length;
      label.textContent = regressive ;
    } else {
      desactiveButton() ; /* llamar función de desactivar botón */
    }
    assignColor() ; /* llamar a función asigna color */
  });

  /* Evento en el Botón */
  button.addEventListener('click', function(event) {
    var textarea = document.getElementById('textarea');
    textAreaText = textarea.value ;

    countSpacesText();

    if (textAreaText !== '' && textAreaText.length !== countSpaces) {
      activeButton() ; /* llamar función de activar botón */

      /* ubico área para crear elementos */
      var sectionDivs = document.querySelector('section');

      /* creaación de elementos y nodo */
      var divVar = document.createElement('div');
      var pVar = document.createElement('p');
      var text = document.createTextNode(textAreaText);

      /* asignación de hijos a padres */
      sectionDivs.appendChild(divVar);
      sectionDivs.appendChild(pVar);
      pVar.appendChild(text);

      /* inicializando cuenta de caracteres*/
      textarea.value = '' ;
      regressive = 140 ;
      label.textContent = regressive ;

      /* removiendo y añadiendo clases */
      label.classList.remove('red', 'green', 'blue') ;
      label.classList.add('black') ;

      /* captura y asignación de fecha */
      divVar.classList.add('hour');
      var timeHour = '  ' + moment().format('LT');
      divVar.innerHTML = timeHour;
      alert(timeHour);

      desactiveButton() ;
    } else {
      desactiveButton() ;
    }

    countSpaces = 0 ; /* reinicializo en 0 el contador de espacios */
  });
});


/* Función de Desactivar Botón */
var desactiveButton = function() {
  button.classList.remove('active');
  button.classList.add('desactive');
  document.getElementById('button').disabled = true;
};

/* Función de Activar Botón */
var activeButton = function() {
  button.classList.remove('desactive');
  button.classList.add('active');
  document.getElementById('button').disabled = false;
};

/* Función cuenta espacios del contenido texto ingresado */
var countSpacesText = function() {
  countSpaces = 0 ;
  for (var i = 0 ; i < textAreaText.length ; i++) {
    if (textAreaText.substr(i, 1) === ' ') {
      countSpaces += 1;
    }
  }
};

/* Función asigna colores */
var assignColor = function() {
  if (regressive > 130 && regressive <= 140) {
    label.classList.add('green');
  }

  if (regressive > 120 && regressive <= 130) {
    label.classList.remove('green');
    label.classList.add('blue');
  }

  if (regressive <= 120 && regressive >= 0) {
    label.classList.remove('blue');
    label.classList.add('purple');
  }

  if (regressive < 0) {
    label.classList.remove('purple');
    label.classList.add('red');
  }
};
