document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const respuesta = document.getElementById('respuesta');

  if (nombre === '' || mensaje === '') {
    respuesta.textContent = 'Por favor completa todos los campos.';
    respuesta.style.color = 'red';
  } else {
    respuesta.textContent = `¡Gracias por tu mensaje, ${nombre}! Te responderé pronto.`;
    respuesta.style.color = 'green';

    // Opcional: limpiar campos
    document.getElementById('formulario-contacto').reset();
  }
});
