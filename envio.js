const scriptURL = 'https://script.google.com/macros/s/AKfycbwWZ07Ll-qxybEYsHyUaoqw_WkNMpObQsb7vhRL6DHLxWY80_2wi4yS_YKG-5e14j9irg/exec'; // Pega aquí la URL del Web App

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombreInput = document.getElementById('nombre');
  const nombre = nombreInput.value.trim();

  if (nombre === "") {
    document.getElementById('mensaje').textContent = "Por favor, escribe un nombre válido.";
    return;
  }

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ nombre }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.text())
  .then(msg => {
    document.getElementById('mensaje').textContent = msg;
    document.getElementById('formulario').reset();
  })
  .catch(err => {
    document.getElementById('mensaje').textContent = 'Error al guardar: ' + err;
  });
});
