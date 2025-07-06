/*
const boton = document.getElementById('play-boton');
const audio = document.getElementById('audio');

boton.addEventListener('click', () => {
  audio.play();
  boton.disabled = true; // Desactiva el botón después de hacer clic
});
*/

  const audio = document.getElementById('audio');
  const boton = document.getElementById('play-boton');
  const icono = document.getElementById('icono-play');

  let estaReproduciendo = false;

  boton.addEventListener('click', () => {
    if (estaReproduciendo) {
      audio.pause();
      icono.src = "play.PNG";
    } else {
      audio.play();
      icono.src = "pausa.PNG";
    }
    estaReproduciendo = !estaReproduciendo;
  });