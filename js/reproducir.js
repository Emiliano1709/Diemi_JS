  const audio = document.getElementById('audio');
  const boton = document.getElementById('play-boton');
  const icono = document.getElementById('icono-play');

  let estaReproduciendo = false;

  boton.addEventListener('click', () => {
    if (estaReproduciendo) {
      audio.pause();
      icono.src = "multi/play.PNG";
    } else {
      audio.play();
      icono.src = "multi/pausa.PNG";
    }
    estaReproduciendo = !estaReproduciendo;
  });