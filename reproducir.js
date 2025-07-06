const boton = document.getElementById('play-boton');
const audio = document.getElementById('audio');

boton.addEventListener('click', () => {
  audio.play();
  boton.disabled = true; // Desactiva el botón después de hacer clic
});
